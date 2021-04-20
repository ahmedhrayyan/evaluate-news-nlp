import { analyze } from "./api"
const results = document.getElementById("results");
const scores = {
    'P+': 'Strong positive',
    'P': 'Positive',
    'NEU': 'Neutral',
    'N': 'Negative',
    'N+': 'Strong negative',
    'NONE': 'Without polarity',
}

function handleSubmit(event) {
    event.preventDefault()
    // check what text was put into the form field
    let formText = document.getElementById('sentence').value

    analyze(formText) 
    .then(({ data }) => {
        results.innerHTML = `
            <dl>
                <dt>Score tag:</dt>
                <dd>${data.score_tag} (${scores[data.score_tag]})</dd>
                <dt>Agreement:</dt>
                <dd>${data.agreement}</dd>
                <dt>Subjectivity:</dt>
                <dd>${data.subjectivity}</dd>
                <dt>Confidence:</dt>
                <dd>${data.confidence}</dd>
                <dt>Irony:</dt>
                <dd>${data.irony}</dd>
            </dl> 
        `        
    })
    .catch(e => {
        alert("Something went wrong")
    })
}

export { handleSubmit }
