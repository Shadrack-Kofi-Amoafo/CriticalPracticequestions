// Array of quiz questions
const questions = [
    {
        question: "When an argument has all of its assertions as true, then the argument is",
        answers: [
            { text: "valid and sound", correct: true },
            { text: "invalid but sound", correct: false },
            { text: "invalid and unsound", correct: false },
            { text: "valid but unsound", correct: false }
        ]
    },
    {
        question: "Nature is governed by laws. Laws are the work of law makers. So, laws of nature are the work of some law maker. This argument is a case of...",
        answers: [
            { text: "Is-ought", correct: false },
            { text: "Equivocation", correct: true },
            { text: "Amphiboly", correct: false },
            { text: "Modus ponens", correct: false }
        ]
    },
    {
        question: "Sir, you must give me Grade A in this course because if you don’t, I’ll not come to school again and you will lose revenue. This is a/an...",
        answers: [
            { text: "Appeal to threat", correct: true },
            { text: "Appeal to anger", correct: false },
            { text: "Fallacy of ignorance", correct: false },
            { text: "Appeal to pity", correct: false }
        ]
    },
    {
        question: "Which of the following is an example of appeal to force fallacy?",
        answers: [
            { text: "Hard work pays!", correct: false },
            { text: "Wash those plates or no food for you", correct: true },
            { text: "Getting a university degree is not an end in itself", correct: false },
            { text: "It is well with your soul", correct: false }
        ]
    },
    {
        question: "In ...... fallacy, an arguer substitutes a person's (his opponent's) actual position or argument with a distorted, exaggerated, or misrepresented version of the position of the argument.",
        answers: [
            { text: "Begging the question", correct: false },
            { text: "Red herring", correct: false },
            { text: "Slippery slope", correct: false },
            { text: "Straw man", correct: true }
        ]
    },
    {
        question: "Argumentum ad numeram is the Latin name for",
        answers: [
            { text: "Appeal to fear", correct: false },
            { text: "Appeal to popularity", correct: true },
            { text: "Appeal to anger", correct: false },
            { text: "Appeal to force", correct: false }
        ]
    },
    {
        question: "Our most reliable source of information about the external world is ……….",
        answers: [
            { text: "expertise", correct: false },
            { text: "personal observation", correct: true },
            { text: "education", correct: false },
            { text: "experience", correct: false }
        ]
    },
    {
        question: "\"For those of you who have children and don't know it, we have a nursery downstairs.\" This expression commits the fallacy called...",
        answers: [
            { text: "Amphiboly", correct: true },
            { text: "Wishful thinking", correct: false },
            { text: "Is-ought", correct: false },
            { text: "Equivocation", correct: false }
        ]
    },
    {
        question: "\"Either I read Critical Thinking or I read Practical reasoning. I read both Critical Thinking and Practical reasoning. Therefore, I read Critical Thinking.\" This is...",
        answers: [
            { text: "valid but unsound", correct: false },
            { text: "invalid argument", correct: false },
            { text: "valid and sound", correct: true },
            { text: "invalid and unsound", correct: false }
        ]
    },
    {
        question: "\"...... like irony, occurs when one thing is said, but something else is intended or understood. Nevertheless, ...... is used, with the express purpose of hurting, insulting or humiliating.\"",
        answers: [
            { text: "Irony", correct: false },
            { text: "Hyperbole", correct: false },
            { text: "Dysphemism", correct: false },
            { text: "Sarcasm", correct: true }
        ]
    },
    {
        question: "In an argument where we are unable to tell which arguer is wrong, then we can say that what is involved is a ...... ",
        answers: [
            { text: "discussion", correct: false },
            { text: "factual issue", correct: false },
            { text: "non-factual issue", correct: true },
            { text: "give-and-take", correct: false }
        ]
    },
    {
        question: "An uncomfortable situation described in a more sensitive and tactful manner is called:",
        answers: [
            { text: "Lüotes", correct: false },
            { text: "Satire", correct: false },
            { text: "Epigram", correct: false },
            { text: "Euphemism", correct: true }
        ]
    },
    {
        question: "The sentence, \"I am trying to solve a million issues these days\", is an example of:",
        answers: [
            { text: "Stereotyping", correct: false },
            { text: "Hyperbole", correct: true },
            { text: "Dysphemism", correct: false },
            { text: "Euphemism", correct: false }
        ]
    },
    {
        question: "\"Have you stopped using illegal sales practices?\"",
        answers: [
            { text: "Red Herring", correct: false },
            { text: "Personal Attack", correct: false },
            { text: "Appeal to Force or Threat", correct: false },
            { text: "Complex Question", correct: true }
        ]
    },
    {
        question: "\"If my dad does not allow me to play Mortal Kombat, I will die.\" State which rhetorical device is employed in this statement.",
        answers: [
            { text: "Sarcasm", correct: false },
            { text: "Dysphemism", correct: false },
            { text: "Euphemism", correct: false },
            { text: "Hyperbole", correct: true }
        ]
    },
    {
        question: "The highway sign says that this area is extremely high. Hide concludes that the risk of forest fires is indeed high right now. This argument is ...... ",
        answers: [
            { text: "Deductive but unsound", correct: false },
            { text: "Inductive but strong", correct: false },
            { text: "Deductive and sound", correct: false },
            { text: "Inductive and weak", correct: true }
        ]
    },
    {
        question: "Kofi drinks tea. He has at least twenty cups everyday. Sometimes he has cheese sandwiches. He is the zoo-keeper. This is",
        answers: [
            { text: "not a proposition", correct: false },
            { text: "argument", correct: false },
            { text: "not an argument", correct: true },
            { text: "inductive argument", correct: false }
        ]
    },
    {
        question: "\"May your God help you in this examination and in all you do.\" This is an example of",
        answers: [
            { text: "not a proposition", correct: false },
            { text: "a proposition", correct: false },
            { text: "a blessing", correct: true },
            { text: "a wish", correct: false }
        ]
    },
    {
        question: "What is the mood of the sentence, \"Do not start work until you're told to do so\"?",
        answers: [
            { text: "Indicative sentence", correct: false },
            { text: "Interrogative sentence", correct: false },
            { text: "Optative sentence", correct: false },
            { text: "Imperative sentence", correct: true }
        ]
    },
    {
        question: "An argument whose conclusion is putatively inferred from its premises is called",
        answers: [
            { text: "an inductive argument", correct: false },
            { text: "a valid argument", correct: false },
            { text: "a deductive argument", correct: true },
            { text: "an invalid argument", correct: false }
        ]
    },
    {
        question: "\"The Daily News carried an article this morning about three local teenagers who were arrested on charges of drug possession. Teenagers these days are nothing but a bunch of junkies and drug addicts.\" This form of reasoning commits the ... fallacy.",
        answers: [
            { text: "Straw man", correct: false },
            { text: "Appeal to anger", correct: false },
            { text: "Misplaced vividness", correct: false },
            { text: "Hasty Generalisation", correct: true }
        ]
    },
    {
        question: "\"Each of the codefendants testified that the other defendant killed the victim. Therefore, we can only conclude that both defendants killed the victim.\" This argument is ...... ",
        answers: [
            { text: "Inductive but strong", correct: false },
            { text: "Inductive and weak", correct: false },
            { text: "Deductive and sound", correct: false },
            { text: "Deductive but unsound", correct: true }
        ]
    },
    {
        question: "The sentence, \"do you enjoy reading Critical Thinking and Practical Reasoning?\" is",
        answers: [
            { text: "a statement", correct: false },
            { text: "a proposition", correct: false },
            { text: "not a proposition", correct: true },
            { text: "an analytic sentence", correct: false }
        ]
    },
    {
        question: "Biology teacher begins teaching evolution by stating that all things evolve. Student says she just can't accept that humans came from bugs. The student commits ...",
        answers: [
            { text: "The slippery slope fallacy", correct: false },
            { text: "The straw man fallacy", correct: true },
            { text: "Appeal to force", correct: false },
            { text: "The red herring fallacy", correct: false }
        ]
    },
    {
        question: "The fallacy which occurs when an irrelevant topic is presented in order to divert attention from the original issue is called",
        answers: [
            { text: "Is-ought", correct: false },
            { text: "Straw man", correct: false },
            { text: "Red herring", correct: true },
            { text: "Personal attack", correct: false }
        ]
    },
    {
        question: "When a sentence can be evaluated as either true or false, then the sentence is a",
        answers: [
            { text: "Problem", correct: false },
            { text: "Proposition", correct: true },
            { text: "Command", correct: false },
            { text: "Question", correct: false }
        ]
    },
    {
        question: "All actors are robots. Jackie Chan is a robot. Thus Jackie Chan is an actor. This argument is ………",
        answers: [
            { text: "Inductive and weak", correct: false },
            { text: "Deductive and sound", correct: false },
            { text: "Deductive but unsound", correct: true },
            { text: "Inductive but strong", correct: false }
        ]
    },
    {
        question: "The sentence, \"The passerby helps dog bite victim\" is a case of",
        answers: [
            { text: "ambiguity", correct: true },
            { text: "innuendo", correct: false },
            { text: "sarcasm", correct: false },
            { text: "loaded question", correct: false }
        ]
    },
    {
        question: "The formal fallacy involved in the argument, \"I am a lecturer. If I am a scholar, then I am a lecturer. Hence, I am a scholar,\" is",
        answers: [
            { text: "denying the antecedent", correct: false },
            { text: "a hypothetical fallacy", correct: false },
            { text: "affirming the consequent", correct: true },
            { text: "a disjunctive fallacy", correct: false }
        ]
    },
    {
        question: "\"Love is the one thing that everybody wants to give and to receive. Love is not identical to sex, but may be closely related. Mature love involves mutual respect and shared values.\" This is",
        answers: [
            { text: "not a proposition", correct: false },
            { text: "an argument", correct: false },
            { text: "not an argument", correct: true },
            { text: "a proposition", correct: false }
        ]
    },
    {
        question: "One of the fallouts of using the non-experimental effect to cause study in the study of population is that...",
        answers: [
            { text: "The cause could simply arise by coincidence", correct: true },
            { text: "It could culminate in metaphysical speculations", correct: false },
            { text: "None of the options", correct: false },
            { text: "The cause may be deceptive", correct: false }
        ]
    },
    {
        question: "\"Most of the people who have tested positive for the Coronavirus admit that they have not been wearing their face masks. Therefore, the wearing of face masks prevents the contraction of the virus\" is a case of Relevant difference reasoning.",
        answers: [
            { text: "False", correct: true },
            { text: "True", correct: false }
        ]
    },
    {
        question: "\"If prices of fuel increase, then prices of lorry fare will increase. Prices of fuel have increased. Therefore, prices of lorry fares will also increase.\" This is a case of a/an...argument",
        answers: [
            { text: "Valid", correct: true },
            { text: "Invalid", correct: false }
        ]
    },
    {
        question: "The Labour Commission of Ghana has no good reasons why it wouldn't meet the demands of UTAG strike members, so the commission claims that it's because if it does, every labourer in every corner of Ghana will come up with their own demands. The Labour Commission commits the fallacy of...",
        answers: [
            { text: "Red herring", correct: false },
            { text: "Slippery slope", correct: true },
            { text: "Hasty generalization", correct: false },
            { text: "Misplaced vividness", correct: false }
        ]
    },
    {
        question: "It has been raining from Monday to Friday. Therefore, it will not rain on Saturday. This argument is",
        answers: [
            { text: "Weak", correct: true },
            { text: "Strong", correct: false }
        ]
    },
    {
        question: "\"If he gets married, then he will be happy. He is married. Therefore, he is happy.\"",
        answers: [
            { text: "Invalid", correct: true },
            { text: "Valid", correct: false }
        ]
    },
    {
        question: "A candidate for president lays out a plan for a new way to handle illegal drug cases in the justice system. His opponent says that no one can trust a former pot smoker to be tough on drugs. This is a clear case of...",
        answers: [
            { text: "Slippery slope", correct: false },
            { text: "Threat", correct: false },
            { text: "Misplaced vividness", correct: false },
            { text: "Personal attack", correct: true }
        ]
    },
    {
        question: "\"Steroids have an adverse effect on our health because they are harmful to our health\" does not beg the question.",
        answers: [
            { text: "True", correct: false },
            { text: "False", correct: true }
        ]
    },
    {
        question: "Moral voluntarists hold that...",
        answers: [
            { text: "Reasoning should direct the will", correct: false },
            { text: "An action is right if it maximizes happiness to the majority", correct: false },
            { text: "Both reason and will should govern each other depending on the circumstance", correct: false },
            { text: "The will should direct reasoning", correct: true }
        ]
    },
    {
        question: "I. Every effect has a cause II. Every cause has an effect III. There is a one to one correlation between a cause and an effect",
        answers: [
            { text: "All the above are true", correct: false },
            { text: "All are false", correct: false },
            { text: "I and II are true", correct: true },
            { text: "Only I is true", correct: false }
        ]
    },
    {
        question: "Kværne Nkrumah is said to have put the interest of Ghana over personal interest. Hence he could be said to be a/an",
        answers: [
            { text: "altruism", correct: true },
            { text: "egoist", correct: false },
            { text: "none of the options", correct: false },
            { text: "utilitarian", correct: false }
        ]
    },
    {
        question: "I ought to buy jewelry for Arna because she has been cooking food for me and the family. This is an example of...",
        answers: [
            { text: "is-ought", correct: false },
            { text: "Causal reasoning", correct: false },
            { text: "Causal claim", correct: true },
            { text: "Wishful thinking", correct: false }
        ]
    },
    {
        question: "100% of Ghanaians who had their coronavirus test so far are COVID-19 positive. Thus all Ghanaians are COVID-19 positive. This argument is",
        answers: [
            { text: "Strong", correct: false },
            { text: "Weak", correct: true }
        ]
    },
    {
        question: "All women are caring. Arna is not a woman. Hence, Arna is not caring. This argument is",
        answers: [
            { text: "Valid", correct: false },
            { text: "Invalid", correct: true }
        ]
    },
    {
        question: "Cats are cute. Fluffy is not cute. Therefore, Fluffy is not a cat. This argument is",
        answers: [
            { text: "Invalid", correct: false },
            { text: "Valid", correct: true }
        ]
    },
    {
        question: "If Ghana beats Nigeria in their next match, then Ghana will go to the World Cup. Ghana will beat Nigeria in their next match. Hence, Ghana will go to the World Cup. This argument is...",
        answers: [
            { text: "Invalid", correct: false },
            { text: "Valid", correct: true }
        ]
    },
    {
        question: "The Akan adage \"Obi niyere alocha nyume\" (jo wit, no one shows God to the child) in ethical sense emphasizes",
        answers: [
            { text: "common sense morality", correct: false },
            { text: "moral rationalism", correct: false },
            { text: "moral voluntarism", correct: true },
            { text: "utilitarianism", correct: false }
        ]
    },
    {
        question: "When the arguer pretends that there are only two options, when in fact there are more, he commits...",
        answers: [
            { text: "Wishful Thinking", correct: false },
            { text: "False dilemma", correct: true },
            { text: "Doubtful argumentation claim", correct: false },
            { text: "Appeal to anecdotal evidence", correct: false }
        ]
    },
    {
        question: "Johnson needs to examine himself as to why he makes such drastic mistakes during critical moments. What critical thinking skill should Johnson employ?",
        answers: [
            { text: "Analysis", correct: false },
            { text: "Inference", correct: false },
            { text: "Self-control", correct: false },
            { text: "Self-regulation", correct: true }
        ]
    },
    {
        question: "No I have never seen any religious person or believer who has been able to empirically show me where God resides. Therefore God does not exist anywhere!\" This commits the fallacy of...",
        answers: [
            { text: "Appeal to popularity", correct: false },
            { text: "None testable claim", correct: false },
            { text: "Red herring", correct: false },
            { text: "Ignorance", correct: true }
        ]
    }
];

// Get DOM elements
const questionBox = document.getElementById('question-box');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const quizContent = document.getElementById('quiz-content');
const resultsContainer = document.getElementById('results-container');
const scoreText = document.getElementById('score-text');
const restartButton = document.getElementById('restart-btn');

let currentQuestionIndex = 0;
let score = 0;

// Function to start the quiz
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    resultsContainer.classList.add('hidden');
    quizContent.classList.remove('hidden');
    nextButton.classList.add('hidden');
    showQuestion();
}

// Function to display a question
function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionBox.innerHTML = `${questionNo}. ${currentQuestion.question}`;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
    });
}

// Function to reset the state for the next question
function resetState() {
    nextButton.classList.add('hidden');
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

// Function to handle answer selection
function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === 'true';

    // Highlight the selected answer
    if (isCorrect) {
        selectedBtn.classList.add('correct');
        score++;
    } else {
        selectedBtn.classList.add('incorrect');
    }

    // After selection, highlight the correct answer if it wasn't selected
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === 'true') {
            button.classList.add('correct');
        }
        button.disabled = true;
    });

    nextButton.classList.remove('hidden');
}

// Function to display the final score
function showScore() {
    resetState();
    quizContent.classList.add('hidden');
    resultsContainer.classList.remove('hidden');
    scoreText.innerHTML = `You scored ${score} out of ${questions.length}!`;
}

// Function to handle the "Next" button click
function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

// Event listeners
nextButton.addEventListener('click', () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

restartButton.addEventListener('click', startQuiz);

// Start the quiz when the page loads
document.addEventListener('DOMContentLoaded', startQuiz);
