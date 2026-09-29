const input = document.querySelector("#searchInput");
const status = document.querySelector("#status");
const results = document.querySelector("#results");

function copyJobCard(button, jobCard) {
    navigator.clipboard.writeText(jobCard)
        .then(() => {
            const oldText = button.textContent;
            button.textContent = "Copied!";
            setTimeout(() => {
                button.textContent = oldText;
            }, 1200);
        })
        .catch(() => {
            alert(`Job Card Number: ${jobCard}`);
        });
}

function renderResults(matches) {
    results.innerHTML = "";

    if (matches.length === 0) {
        results.innerHTML = '<div class="empty">No matching person found.</div>';
        return;
    }

    matches.forEach(person => {
        const card = document.createElement("article");
        card.className = "result";

        const name = document.createElement("h2");
        name.className = "result-name";
        name.textContent = person.name;
        card.appendChild(name);

        const father = document.createElement("div");
        father.className = "detail";
        father.textContent = `Father/Husband: ${person.father_husband}`;
        card.appendChild(father);

        const info = document.createElement("div");
        info.className = "detail";
        info.textContent = `Gender: ${person.gender}  •  Age: ${person.age}`;
        card.appendChild(info);

        const jobCard = document.createElement("div");
        jobCard.className = "job-card";
        jobCard.innerHTML = "Job Card Number: <strong></strong>";
        jobCard.querySelector("strong").textContent = person.job_card;
        card.appendChild(jobCard);

        if (person.issue_date) {
            const date = document.createElement("div");
            date.className = "detail";
            date.textContent = `Issue date: ${person.issue_date}`;
            card.appendChild(date);
        }

        if (person.remarks) {
            const remark = document.createElement("div");
            remark.className = "remark";
            remark.textContent = `Remark: ${person.remarks}`;
            card.appendChild(remark);
        }

        const button = document.createElement("button");
        button.className = "copy-button";
        button.textContent = "Copy Job Card Number";
        button.addEventListener("click", () => copyJobCard(button, person.job_card));
        card.appendChild(button);

        results.appendChild(card);
    });
}

function search() {
    const query = input.value.trim().toLowerCase();

    if (!query) {
        status.textContent = `Methakthaka. ${jobCardData.length} records lia.`;
        results.innerHTML = "";
        return;
    }

    const matches = jobCardData.filter(person =>
        person.name.toLowerCase().includes(query)
    );

    status.textContent = `${matches.length} result${matches.length === 1 ? "" : "s"} hungcho.`;
    renderResults(matches);
}

input.addEventListener("input", search);

status.textContent = `Methakthaka. ${jobCardData.length} records lia.`;
