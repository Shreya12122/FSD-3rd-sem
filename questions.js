document.getElementById("quizForm").addEventListener("submit", function(event)
{
    event.preventDefault();

    let answers = {
        q1: "C",
        q2: "B",
        q3: "B",
        q4: "D",
        q5: "B"
    };

    let marks = 0;
    let done = 0;

    for (let i = 1; i <= 5; i++)
    {
        let selected = document.querySelector('input[name="q' + i + '"]:checked');

        if (selected)
        {
            done++;

            if (selected.value === answers["q" + i])
            {
                marks++;
            }
        }
    }

    document.getElementById("result").innerHTML =
        "Questions Done: " + done + " / 5<br>" +
        "Marks Obtained: " + marks + " / 5";
});