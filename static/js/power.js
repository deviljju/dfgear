// 파워밸런스 파티 조합기

function initTable() {
    const tbody = document.querySelector('#playerTable tbody');
    for (let p = 0; p < 4; p++) {
        const tr = document.createElement('tr');
        tr.dataset.party = p;
        let cells = `<td class="party-label">파티원 ${p + 1}</td>`;
        for (let c = 0; c < 3; c++) {
            cells += `<td><input type="number" class="power-input" placeholder="던담딜" min="1"></td>`;
        }
        tr.innerHTML = cells;
        tbody.appendChild(tr);
    }

    document.querySelectorAll('#playerTable tbody tr').forEach(tr => {
        tr.querySelectorAll('input').forEach(inp => {
            inp.addEventListener('input', () => updateHighlight(tr));
        });
    });
}

function updateHighlight(tr) {
    const inputs = Array.from(tr.querySelectorAll('input'));
    const values = inputs.map(inp => parseFloat(inp.value) || 0);
    const max = Math.max(...values);
    inputs.forEach(inp => {
        inp.classList.toggle('is-ppyok', max > 0 && parseFloat(inp.value) === max);
    });
}

function clearAll() {
    document.querySelectorAll('#playerTable tbody tr').forEach(tr => {
        tr.querySelectorAll('input').forEach(inp => {
            inp.value = '';
            inp.classList.remove('is-ppyok');
        });
    });
    document.getElementById('output').innerHTML = '<p class="pw-hint">조합 버튼을 눌러 최적 파티를 확인하세요</p>';
}

function fillRandom() {
    document.querySelectorAll('#playerTable tbody tr').forEach(tr => {
        const inputs = tr.querySelectorAll('input');
        const ppyokIdx = Math.floor(Math.random() * 3);
        inputs.forEach((inp, i) => {
            inp.value = i === ppyokIdx
                ? Math.floor(Math.random() * 60) + 520
                : Math.floor(Math.random() * 80) + 360;
        });
        updateHighlight(tr);
    });
}

// ───── 조합 알고리즘 ─────

function getPermutations(arr) {
    if (arr.length <= 1) return [[...arr]];
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        const rest = arr.filter((_, j) => j !== i);
        getPermutations(rest).forEach(p => result.push([arr[i], ...p]));
    }
    return result;
}

function findBestCombination(partyValues) {
    // sorted[p][0] = 뾰족딜러(최고), [1][2] = 일반딜러
    const sorted = partyValues.map((vals, p) =>
        vals.map((power, idx) => ({ power, party: p, idx }))
            .sort((a, b) => b.power - a.power)
    );

    const ppyoks = sorted.map(d => d[0]);
    const normals = sorted.flatMap(d => [d[1], d[2]]);

    let best = { minTotal: -1, rows: null };

    for (const perm of getPermutations([0, 1, 2, 3])) {
        // perm[p] = 파티 p의 뾰족딜러가 들어가는 row
        // 조건: 파티 p의 딜러는 row p에 들어갈 수 없음
        if (perm.some((row, p) => row === p)) continue;

        // ppyokInRow[row] = 해당 row에 뾰족딜러를 제공하는 파티
        const ppyokInRow = new Array(4);
        perm.forEach((row, p) => (ppyokInRow[row] = p));
        const baseTotals = ppyokInRow.map(p => ppyoks[p].power);

        const rowNorms = [[], [], [], []];
        const cap = [2, 2, 2, 2];

        function bt(i) {
            if (i === normals.length) {
                const totals = rowNorms.map((nr, row) =>
                    baseTotals[row] + nr.reduce((s, d) => s + d.power, 0)
                );
                const minVal = Math.min(...totals);
                if (minVal > best.minTotal) {
                    best.minTotal = minVal;
                    best.rows = rowNorms.map((nr, row) => ({
                        ppyok: ppyoks[ppyokInRow[row]],
                        normals: [...nr],
                        total: totals[row]
                    }));
                }
                return;
            }
            const d = normals[i];
            for (let row = 0; row < 4; row++) {
                if (row === d.party || cap[row] === 0) continue;
                cap[row]--;
                rowNorms[row].push(d);
                bt(i + 1);
                rowNorms[row].pop();
                cap[row]++;
            }
        }

        bt(0);
    }

    return best;
}

function calculate() {
    const partyValues = [];
    let valid = true;

    document.querySelectorAll('#playerTable tbody tr').forEach(tr => {
        const vals = Array.from(tr.querySelectorAll('input'))
            .map(inp => parseInt(inp.value, 10));
        if (vals.some(v => isNaN(v) || v <= 0)) valid = false;
        partyValues.push(vals);
    });

    if (!valid) {
        alert('모든 파티원의 딜러 전투력 3개를 입력해주세요.');
        return;
    }

    const result = findBestCombination(partyValues);
    displayResult(result);
}

function displayResult(result) {
    const output = document.getElementById('output');
    if (!result.rows) {
        output.innerHTML = '<p class="text-danger">유효한 조합을 찾을 수 없습니다.</p>';
        return;
    }

    let html = '<div class="result-list">';
    result.rows.forEach((row, i) => {
        const dealers = [row.ppyok, ...row.normals].sort((a, b) => b.power - a.power);
        html += `<div class="result-row">
            <span class="result-idx">${i + 1}</span>
            <div class="result-dealers">`;
        dealers.forEach(d => {
            const isPpyok = d === row.ppyok;
            html += `<span class="result-dealer${isPpyok ? ' is-ppyok' : ''}">
                ${d.power}<small>[${d.party + 1}]${isPpyok ? '★' : ''}</small>
            </span>`;
        });
        html += `</div><span class="result-total">(${row.total})</span></div>`;
    });
    html += '</div>';

    output.innerHTML = html;
}

initTable();