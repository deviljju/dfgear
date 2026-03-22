const playerNames = [
    "R1", "R2", "R3", "R4",
    "Y1", "Y2", "Y3", "Y4",
    "G1", "G2", "G3", "G4"
];

const table = document.getElementById("playerTable");

playerNames.forEach(name => {
    const row = document.createElement("tr");
    row.innerHTML = `
                <td>${name}</td>
                <td><input type="text"></td>
                <td><input type="text"></td>
                <td><input type="text"></td>
                `;
    table.appendChild(row);
});

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function init(){
    const rows = table.querySelectorAll("tr");
    for (let i = 1; i < rows.length; i++) {
        const inputs = rows[i].querySelectorAll("input");

        // 랜덤 위치 하나를 550으로 설정
        const randomIndex = Math.floor(Math.random() * 3);

        for (let j = 0; j < 3; j++) {
            if (j === randomIndex) {
                inputs[j].value = 550;
            } else {
                inputs[j].value = getRandom(350, 460);
            }
        }
    }
}

function balanceTeams(players) {
    const teamSize = 4;
    const teamCount = 3;
    const total = players.reduce((a, b) => a + b.avg, 0);
    const target = total / teamCount;

    let bestDiff = Infinity;
    let bestTeams = null;

    players.sort((a, b) => b.avg - a.avg);

    function backtrack(index, teams, sums) {
        if (index === players.length) {
            const diff = Math.max(...sums.map(s => Math.abs(target - s)));
            if (diff < bestDiff) {
                bestDiff = diff;
                bestTeams = teams.map(team => [...team]);
            }
            return;
        }

        for (let i = 0; i < teamCount; i++) {
            if (teams[i].length < teamSize) {
                teams[i].push(players[index]);
                sums[i] += players[index].avg;

                backtrack(index + 1, teams, sums);

                teams[i].pop();
                sums[i] -= players[index].avg;
            }
        }
    }

    backtrack(0, [[], [], []], [0, 0, 0]);

    return { total, target, bestDiff, teams: bestTeams };
}

function calculate() {
    const rows = table.querySelectorAll("tr");
    const players = [];

    for (let i = 1; i < rows.length; i++) {
        const cells = rows[i].querySelectorAll("td");
        const name = cells[0].innerText;
        const inputs = rows[i].querySelectorAll("input");
        const values = Array.from(inputs).map(input => parseInt(input.value));

        if (values.some(v => isNaN(v))) {
            alert("모든 값을 입력하세요.");
            return;
        }

        const avg = Math.round(values.reduce((a, b) => a + b, 0) / 3);
        players.push({ name, avg });
    }

    const result = balanceTeams(players);

    let html = `
                <h2>📊 결과</h2>
                <p>목표 팀 평균합: ${result.target.toFixed(2)} | 최대 오차: ${result.bestDiff.toFixed(2)}</p>
                <table class="resultTable">
                    <tr>
                        <th>파티</th>
                        <th>이름</th>
                        <th>평균 전투력</th>
                    </tr>
                    `;

    result.teams.forEach((team, i) => {
        let sum = 0;
        team.forEach(player => {
            sum += player.avg;
            html += `
                    <tr>
                        <td>${i + 1}</td>
                        <td>${player.name}</td>
                        <td>${player.avg}</td>
                    </tr>
                    `;
        });

        html += `
                    <tr class="sumRow">
                        <td></td>
                        <td>합계</td>
                        <td>${sum}</td>
                    </tr>
                    `;
    });

    html += `</table>`;
    document.getElementById("output").innerHTML = html;
}

init();