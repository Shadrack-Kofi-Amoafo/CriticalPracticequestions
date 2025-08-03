// Array of quiz questions with new explanation field
const questions = [
    {
        question: "When an argument has all of its assertions as true, then the argument is",
        answers: [
            { text: "valid and sound", correct: true },
            { text: "invalid but sound", correct: false },
            { text: "invalid and unsound", correct: false },
            { text: "valid but unsound", correct: false }
        ],
        explanation: "A deductive argument is **valid** if its conclusion logically follows from its premises. It is **sound** if it is valid *and* all of its premises are true. If all the assertions (premises) are true, and the argument is structured correctly, it is both valid and sound."
    },
    {
        question: "Nature is governed by laws. Laws are the work of law makers. So, laws of nature are the work of some law maker. This argument is a case of...",
        answers: [
            { text: "Is-ought", correct: false },
            { text: "Equivocation", correct: true },
            { text: "Amphiboly", correct: false },
            { text: "Modus ponens", correct: false }
        ],
        explanation: "This is a fallacy of **equivocation**. The word 'laws' is used with two different meanings: 'laws of nature' (scientific principles) and 'laws' (rules made by a person). The argument shifts the meaning of the word mid-argument to reach a false conclusion."
    },
    {
        question: "Sir, you must give me Grade A in this course because if you don’t, I’ll not come to school again and you will lose revenue. This is a/an...",
        answers: [
            { text: "Appeal to threat", correct: true },
            { text: "Appeal to anger", correct: false },
            { text: "Fallacy of ignorance", correct: false },
            { text: "Appeal to pity", correct: false }
        ],
        explanation: "This is an **appeal to threat** (also known as *ad baculum*). The person is not providing a reason for deserving a Grade A, but is instead threatening the teacher with a negative consequence (loss of revenue) if they don't comply."
    },
    {
        question: "Which of the following is an example of appeal to force fallacy?",
        answers: [
            { text: "Hard work pays!", correct: false },
            { text: "Wash those plates or no food for you", correct: true },
            { text: "Getting a university degree is not an end in itself", correct: false },
            { text: "It is well with your soul", correct: false }
        ],
        explanation: "An **appeal to force** or **threat** uses coercion or a threat of negative consequences to persuade someone, rather than using logical reasoning. 'Wash those plates or no food for you' is a direct threat."
    },
    {
        question: "In ...... fallacy, an arguer substitutes a person's (his opponent's) actual position or argument with a distorted, exaggerated, or misrepresented version of the position of the argument.",
        answers: [
            { text: "Begging the question", correct: false },
            { text: "Red herring", correct: false },
            { text: "Slippery slope", correct: false },
            { text: "Straw man", correct: true }
        ],
        explanation: "The **straw man** fallacy involves misrepresenting an opponent's argument to make it easier to attack. Instead of refuting the actual argument, the arguer attacks a 'straw man'—a distorted, weaker version of the original point."
    },
    {
        question: "Argumentum ad numeram is the Latin name for",
        answers: [
            { text: "Appeal to fear", correct: false },
            { text: "Appeal to popularity", correct: true },
            { text: "Appeal to anger", correct: false },
            { text: "Appeal to force", correct: false }
        ],
        explanation: "**Argumentum ad numeram** is the Latin term for **appeal to popularity** (also known as *ad populum*). This fallacy asserts that a claim is true simply because a large number of people believe it."
    },
    {
        question: "Our most reliable source of information about the external world is ……….",
        answers: [
            { text: "expertise", correct: false },
            { text: "personal observation", correct: true },
            { text: "education", correct: false },
            { text: "experience", correct: false }
        ],
        explanation: "While other sources are valuable, **personal observation** (through our senses) is the most fundamental and direct source of information about the external world."
    },
    {
        question: "\"For those of you who have children and don't know it, we have a nursery downstairs.\" This expression commits the fallacy called...",
        answers: [
            { text: "Amphiboly", correct: true },
            { text: "Wishful thinking", correct: false },
            { text: "Is-ought", correct: false },
            { text: "Equivocation", correct: false }
        ],
        explanation: "The fallacy of **amphiboly** arises from a grammatical ambiguity. The sentence is unclear whether it is addressing people who have children and don't know it, or if it is addressing people who have children and also don't know that there's a nursery."
    },
    {
        question: "\"Either I read Critical Thinking or I read Practical reasoning. I read both Critical Thinking and Practical reasoning. Therefore, I read Critical Thinking.\" This is...",
        answers: [
            { text: "valid but unsound", correct: false },
            { text: "invalid argument", correct: false },
            { text: "valid and sound", correct: true },
            { text: "invalid and unsound", correct: false }
        ],
        explanation: "This is a **valid and sound** argument. The premises 'I read both Critical Thinking and Practical reasoning' and 'Either I read Critical Thinking or I read Practical reasoning' are both true, and the conclusion 'Therefore, I read Critical Thinking' logically follows from the premises."
    },
    {
        question: "\"...... like irony, occurs when one thing is said, but something else is intended or understood. Nevertheless, ...... is used, with the express purpose of hurting, insulting or humiliating.\"",
        answers: [
            { text: "Irony", correct: false },
            { text: "Hyperbole", correct: false },
            { text: "Dysphemism", correct: false },
            { text: "Sarcasm", correct: true }
        ],
        explanation: "**Sarcasm** is a form of irony that is specifically intended to mock, insult, or convey contempt. It is often meant to be hurtful, unlike general irony."
    },
    {
        question: "In an argument where we are unable to tell which arguer is wrong, then we can say that what is involved is a ...... ",
        answers: [
            { text: "discussion", correct: false },
            { text: "factual issue", correct: false },
            { text: "non-factual issue", correct: true },
            { text: "give-and-take", correct: false }
        ],
        explanation: "A **non-factual issue** is one where the truth or falsehood cannot be definitively proven by empirical evidence. Both sides may have valid points, but there is no objective way to determine which is 'right'."
    },
    {
        question: "An uncomfortable situation described in a more sensitive and tactful manner is called:",
        answers: [
            { text: "Lüotes", correct: false },
            { text: "Satire", correct: false },
            { text: "Epigram", correct: false },
            { text: "Euphemism", correct: true }
        ],
        explanation: "A **euphemism** is a polite, indirect, or softened word or phrase used to replace one that is considered too harsh or blunt. For example, saying 'passed away' instead of 'died'."
    },
    {
        question: "The sentence, \"I am trying to solve a million issues these days\", is an example of:",
        answers: [
            { text: "Stereotyping", correct: false },
            { text: "Hyperbole", correct: true },
            { text: "Dysphemism", correct: false },
            { text: "Euphemism", correct: false }
        ],
        explanation: "**Hyperbole** is the use of exaggerated language or statements for emphasis or effect. 'A million issues' is a clear exaggeration used to emphasize that the person is very busy."
    },
    {
        question: "\"Have you stopped using illegal sales practices?\"",
        answers: [
            { text: "Red Herring", correct: false },
            { text: "Personal Attack", correct: false },
            { text: "Appeal to Force or Threat", correct: false },
            { text: "Complex Question", correct: true }
        ],
        explanation: "This is a **complex question** (also known as a loaded question). It is a single question that contains a hidden assumption ('You have used illegal sales practices in the past'). Answering 'yes' or 'no' implicitly confirms the assumption."
    },
    {
        question: "\"If my dad does not allow me to play Mortal Kombat, I will die.\" State which rhetorical device is employed in this statement.",
        answers: [
            { text: "Sarcasm", correct: false },
            { text: "Dysphemism", correct: false },
            { text: "Euphemism", correct: false },
            { text: "Hyperbole", correct: true }
        ],
        explanation: "This is an example of **hyperbole**. The statement 'I will die' is a dramatic exaggeration to express how much the person wants to play the game, not a literal claim."
    },
    {
        question: "The highway sign says that this area is extremely high. Hide concludes that the risk of forest fires is indeed high right now. This argument is ...... ",
        answers: [
            { text: "Deductive but unsound", correct: false },
            { text: "Inductive but strong", correct: false },
            { text: "Deductive and sound", correct: false },
            { text: "Inductive and weak", correct: true }
        ],
        explanation: "This is an **inductive and weak** argument. It is inductive because it draws a probable conclusion from a premise (the sign). However, it is weak because 'extremely high' can refer to many things (e.g., elevation), and the connection to 'forest fire risk' is not strong enough to make the conclusion probable."
    },
    {
        question: "Kofi drinks tea. He has at least twenty cups everyday. Sometimes he has cheese sandwiches. He is the zoo-keeper. This is",
        answers: [
            { text: "not a proposition", correct: false },
            { text: "argument", correct: false },
            { text: "not an argument", correct: true },
            { text: "inductive argument", correct: false }
        ],
        explanation: "This is **not an argument**. An argument is a set of premises intended to support a conclusion. This is simply a series of statements or a description without a conclusion."
    },
    {
        question: "\"May your God help you in this examination and in all you do.\" This is an example of",
        answers: [
            { text: "not a proposition", correct: false },
            { text: "a proposition", correct: false },
            { text: "a blessing", correct: true },
            { text: "a wish", correct: false }
        ],
        explanation: "A blessing is a form of expression intended to invoke divine favor upon someone. This statement is a direct example of a blessing."
    },
    {
        question: "What is the mood of the sentence, \"Do not start work until you're told to do so\"?",
        answers: [
            { text: "Indicative sentence", correct: false },
            { text: "Interrogative sentence", correct: false },
            { text: "Optative sentence", correct: false },
            { text: "Imperative sentence", correct: true }
        ],
        explanation: "An **imperative sentence** gives a direct command, instruction, or prohibition. The sentence 'Do not start work...' is a clear command."
    },
    {
        question: "An argument whose conclusion is putatively inferred from its premises is called",
        answers: [
            { text: "an inductive argument", correct: false },
            { text: "a valid argument", correct: false },
            { text: "a deductive argument", correct: true },
            { text: "an invalid argument", correct: false }
        ],
        explanation: "A **deductive argument** is one in which the conclusion is claimed to follow necessarily from the premises. If the premises are true, the conclusion *must* be true."
    },
    {
        question: "\"The Daily News carried an article this morning about three local teenagers who were arrested on charges of drug possession. Teenagers these days are nothing but a bunch of junkies and drug addicts.\" This form of reasoning commits the ... fallacy.",
        answers: [
            { text: "Straw man", correct: false },
            { text: "Appeal to anger", correct: false },
            { text: "Misplaced vividness", correct: false },
            { text: "Hasty Generalisation", correct: true }
        ],
        explanation: "This is a **hasty generalization**. The arguer is drawing a broad conclusion about all teenagers based on a small, unrepresentative sample of three individuals."
    },
    {
        question: "\"Each of the codefendants testified that the other defendant killed the victim. Therefore, we can only conclude that both defendants killed the victim.\" This argument is ...... ",
        answers: [
            { text: "Inductive but strong", correct: false },
            { text: "Inductive and weak", correct: false },
            { text: "Deductive and sound", correct: false },
            { text: "Deductive but unsound", correct: true }
        ],
        explanation: "This is a **deductive but unsound** argument. It is deductive in form, but the premises are contradictory (if one killed the victim, the other didn't) making the conclusion impossible, thus it is unsound."
    },
    {
        question: "The sentence, \"do you enjoy reading Critical Thinking and Practical Reasoning?\" is",
        answers: [
            { text: "a statement", correct: false },
            { text: "a proposition", correct: false },
            { text: "not a proposition", correct: true },
            { text: "an analytic sentence", correct: false }
        ],
        explanation: "A **proposition** is a declarative statement that can be either true or false. A question, like 'Do you enjoy reading...', cannot be assigned a truth value, so it is not a proposition."
    },
    {
        question: "Biology teacher begins teaching evolution by stating that all things evolve. Student says she just can't accept that humans came from bugs. The student commits ...",
        answers: [
            { text: "The slippery slope fallacy", correct: false },
            { text: "The straw man fallacy", correct: true },
            { text: "Appeal to force", correct: false },
            { text: "The red herring fallacy", correct: false }
        ],
        explanation: "The student is committing the **straw man** fallacy. The teacher said 'all things evolve,' but the student has misrepresented this as the claim 'humans came from bugs,' a distorted and easier-to-refute position."
    },
    {
        question: "The fallacy which occurs when an irrelevant topic is presented in order to divert attention from the original issue is called",
        answers: [
            { text: "Is-ought", correct: false },
            { text: "Straw man", correct: false },
            { text: "Red herring", correct: true },
            { text: "Personal attack", correct: false }
        ],
        explanation: "A **red herring** is an irrelevant topic introduced in an argument to divert the audience's attention from the main issue. It's a tactic to shift the conversation away from a difficult point."
    },
    {
        question: "When a sentence can be evaluated as either true or false, then the sentence is a",
        answers: [
            { text: "Problem", correct: false },
            { text: "Proposition", correct: true },
            { text: "Command", correct: false },
            { text: "Question", correct: false }
        ],
        explanation: "A **proposition** (or statement) is a declarative sentence that is capable of being true or false. Questions, commands, and greetings are not propositions."
    },
    {
        question: "All actors are robots. Jackie Chan is a robot. Thus Jackie Chan is an actor. This argument is ………",
        answers: [
            { text: "Inductive and weak", correct: false },
            { text: "Deductive and sound", correct: false },
            { text: "Deductive but unsound", correct: true },
            { text: "Inductive but strong", correct: false }
        ],
        explanation: "This argument is **deductive but unsound**. It has a valid structure (affirming the consequent, a formal fallacy), but the premises 'All actors are robots' and 'Jackie Chan is a robot' are false, making the argument unsound."
    },
    {
        question: "The sentence, \"The passerby helps dog bite victim\" is a case of",
        answers: [
            { text: "ambiguity", correct: true },
            { text: "innuendo", correct: false },
            { text: "sarcasm", correct: false },
            { text: "loaded question", correct: false }
        ],
        explanation: "This is a case of **ambiguity**. The sentence is grammatically unclear and can be interpreted in two ways: either the passerby helped a victim of a dog bite, or the passerby helped a dog bite a victim."
    },
    {
        question: "The formal fallacy involved in the argument, \"I am a lecturer. If I am a scholar, then I am a lecturer. Hence, I am a scholar,\" is",
        answers: [
            { text: "denying the antecedent", correct: false },
            { text: "a hypothetical fallacy", correct: false },
            { text: "affirming the consequent", correct: true },
            { text: "a disjunctive fallacy", correct: false }
        ],
        explanation: "This is an example of the formal fallacy of **affirming the consequent**. The structure is 'If P, then Q. Q. Therefore, P.' Even if the premises are true, the conclusion is not guaranteed to be true."
    },
    {
        question: "\"Love is the one thing that everybody wants to give and to receive. Love is not identical to sex, but may be closely related. Mature love involves mutual respect and shared values.\" This is",
        answers: [
            { text: "not a proposition", correct: false },
            { text: "an argument", correct: false },
            { text: "not an argument", correct: true },
            { text: "a proposition", correct: false }
        ],
        explanation: "This is **not an argument** because there is no conclusion being supported by premises. It's simply a series of statements providing a definition or description of a concept."
    },
    {
        question: "One of the fallouts of using the non-experimental effect to cause study in the study of population is that...",
        answers: [
            { text: "The cause could simply arise by coincidence", correct: true },
            { text: "It could culminate in metaphysical speculations", correct: false },
            { text: "None of the options", correct: false },
            { text: "The cause may be deceptive", correct: false }
        ],
        explanation: "When studying populations without a controlled experiment, a correlation (or a cause-effect relationship) may be observed that is not actually true, but is instead just a coincidence. This is a common pitfall of non-experimental studies."
    },
    {
        question: "\"Most of the people who have tested positive for the Coronavirus admit that they have not been wearing their face masks. Therefore, the wearing of face masks prevents the contraction of the virus\" is a case of Relevant difference reasoning.",
        answers: [
            { text: "False", correct: true },
            { text: "True", correct: false }
        ],
        explanation: "This statement is **false**. This is an example of an inductive argument, and it uses the fallacy of correlation not implying causation. While the two events are correlated, the argument does not prove that one causes the other."
    },
    {
        question: "\"If prices of fuel increase, then prices of lorry fare will increase. Prices of fuel have increased. Therefore, prices of lorry fares will also increase.\" This is a case of a/an...argument",
        answers: [
            { text: "Valid", correct: true },
            { text: "Invalid", correct: false }
        ],
        explanation: "This is a **valid** deductive argument. The structure is *Modus Ponens* (If P, then Q. P. Therefore, Q.). If the premises are true, the conclusion is guaranteed to be true."
    },
    {
        question: "The Labour Commission of Ghana has no good reasons why it wouldn't meet the demands of UTAG strike members, so the commission claims that it's because if it does, every labourer in every corner of Ghana will come up with their own demands. The Labour Commission commits the fallacy of...",
        answers: [
            { text: "Red herring", correct: false },
            { text: "Slippery slope", correct: true },
            { text: "Hasty generalization", correct: false },
            { text: "Misplaced vividness", correct: false }
        ],
        explanation: "This is a **slippery slope** fallacy. The commission is arguing that if they take one step (meeting UTAG's demands), it will inevitably lead to a chain of negative events (all other laborers demanding things) without sufficient evidence to support that claim."
    },
    {
        question: "It has been raining from Monday to Friday. Therefore, it will not rain on Saturday. This argument is",
        answers: [
            { text: "Weak", correct: true },
            { text: "Strong", correct: false }
        ],
        explanation: "This is a **weak** inductive argument. The premises (it has rained all week) do not make the conclusion (it won't rain tomorrow) very probable. In fact, a pattern of rain might suggest it is more likely to continue."
    },
    {
        question: "\"If he gets married, then he will be happy. He is married. Therefore, he is happy.\"",
        answers: [
            { text: "Invalid", correct: true },
            { text: "Valid", correct: false }
        ],
        explanation: "This is an **invalid** deductive argument. It follows the structure of **affirming the consequent** (If P, then Q. Q. Therefore, P.), which is a formal fallacy. Being happy may have other causes besides being married, so the conclusion is not guaranteed."
    },
    {
        question: "A candidate for president lays out a plan for a new way to handle illegal drug cases in the justice system. His opponent says that no one can trust a former pot smoker to be tough on drugs. This is a clear case of...",
        answers: [
            { text: "Slippery slope", correct: false },
            { text: "Threat", correct: false },
            { text: "Misplaced vividness", correct: false },
            { text: "Personal attack", correct: true }
        ],
        explanation: "This is a **personal attack** (ad hominem). Instead of addressing the candidate's plan for the justice system, the opponent is attacking the candidate's character or past behavior."
    },
    {
        question: "\"Steroids have an adverse effect on our health because they are harmful to our health\" does not beg the question.",
        answers: [
            { text: "True", correct: false },
            { text: "False", correct: true }
        ],
        explanation: "The statement is **false**. The argument 'Steroids have an adverse effect... because they are harmful...' is circular reasoning, or **begging the question** (*petitio principii*). It assumes the conclusion (that steroids are harmful) as a premise to support itself."
    },
    {
        question: "Moral voluntarists hold that...",
        answers: [
            { text: "Reasoning should direct the will", correct: false },
            { text: "An action is right if it maximizes happiness to the majority", correct: false },
            { text: "Both reason and will should govern each other depending on the circumstance", correct: false },
            { text: "The will should direct reasoning", correct: true }
        ],
        explanation: "**Moral voluntarism** is the ethical view that morality is ultimately based on will or choice rather than reason. This suggests that moral actions are determined by our will, not by logic."
    },
    {
        question: "I. Every effect has a cause II. Every cause has an effect III. There is a one to one correlation between a cause and an effect",
        answers: [
            { text: "All the above are true", correct: false },
            { text: "All are false", correct: false },
            { text: "I and II are true", correct: true },
            { text: "Only I is true", correct: false }
        ],
        explanation: "The statements 'Every effect has a cause' and 'Every cause has an effect' are widely accepted principles. However, a 'one to one correlation' (III) is often not the case, as causes can have multiple effects, and effects can have multiple causes."
    },
    {
        question: "Kværne Nkrumah is said to have put the interest of Ghana over personal interest. Hence he could be said to be a/an",
        answers: [
            { text: "altruism", correct: true },
            { text: "egoist", correct: false },
            { text: "none of the options", correct: false },
            { text: "utilitarian", correct: false }
        ],
        explanation: "**Altruism** is the principle or practice of concern for the welfare of others. Putting the interest of one's country over personal interest is a prime example of altruistic behavior."
    },
    {
        question: "I ought to buy jewelry for Arna because she has been cooking food for me and the family. This is an example of...",
        answers: [
            { text: "is-ought", correct: false },
            { text: "Causal reasoning", correct: false },
            { text: "Causal claim", correct: true },
            { text: "Wishful thinking", correct: false }
        ],
        explanation: "This is a **causal claim**. The statement claims that Arna's cooking is the *cause* for the speaker's obligation to buy her jewelry. This is a claim of a cause-and-effect relationship."
    },
    {
        question: "100% of Ghanaians who had their coronavirus test so far are COVID-19 positive. Thus all Ghanaians are COVID-19 positive. This argument is",
        answers: [
            { text: "Strong", correct: false },
            { text: "Weak", correct: true }
        ],
        explanation: "This is a **weak** inductive argument. The sample size of 'Ghanaians who had their coronavirus test' is likely not representative of the entire population of Ghana, making the generalization to 'all Ghanaians' very weak."
    },
    {
        question: "All women are caring. Arna is not a woman. Hence, Arna is not caring. This argument is",
        answers: [
            { text: "Valid", correct: false },
            { text: "Invalid", correct: true }
        ],
        explanation: "This argument is **invalid**. It has the form 'All P are Q. X is not P. Therefore, X is not Q.' This is a classic formal fallacy. It is possible for someone who is not a woman to still be caring."
    },
    {
        question: "Cats are cute. Fluffy is not cute. Therefore, Fluffy is not a cat. This argument is",
        answers: [
            { text: "Invalid", correct: false },
            { text: "Valid", correct: true }
        ],
        explanation: "This is a **valid** deductive argument. The structure is 'All P are Q. X is not Q. Therefore, X is not P.' (Modus Tollens). If all cats are cute and Fluffy is not cute, Fluffy cannot be a cat."
    },
    {
        question: "If Ghana beats Nigeria in their next match, then Ghana will go to the World Cup. Ghana will beat Nigeria in their next match. Hence, Ghana will go to the World Cup. This argument is...",
        answers: [
            { text: "Invalid", correct: false },
            { text: "Valid", correct: true }
        ],
        explanation: "This is a **valid** deductive argument. It is a classic example of *Modus Ponens* (If P, then Q. P. Therefore, Q.). The conclusion follows necessarily from the premises."
    },
    {
        question: "The Akan adage \"Obi niyere alocha nyume\" (jo wit, no one shows God to the child) in ethical sense emphasizes",
        answers: [
            { text: "common sense morality", correct: false },
            { text: "moral rationalism", correct: false },
            { text: "moral voluntarism", correct: true },
            { text: "utilitarianism", correct: false }
        ],
        explanation: "The Akan adage emphasizes that a child is not born with innate knowledge of God and must be shown. In an ethical sense, this aligns with **moral voluntarism**, the view that moral knowledge is not an innate truth but something that must be taught and chosen."
    },
    {
        question: "When the arguer pretends that there are only two options, when in fact there are more, he commits...",
        answers: [
            { text: "Wishful Thinking", correct: false },
            { text: "False dilemma", correct: true },
            { text: "Doubtful argumentation claim", correct: false },
            { text: "Appeal to anecdotal evidence", correct: false }
        ],
        explanation: "A **false dilemma** (or false dichotomy) is a fallacy where an arguer presents only two options or sides when there are actually more. This forces a choice between two extremes when other possibilities exist."
    },
    {
        question: "Johnson needs to examine himself as to why he makes such drastic mistakes during critical moments. What critical thinking skill should Johnson employ?",
        answers: [
            { text: "Analysis", correct: false },
            { text: "Inference", correct: false },
            { text: "Self-control", correct: false },
            { text: "Self-regulation", correct: true }
        ],
        explanation: "**Self-regulation** is the critical thinking skill of monitoring and correcting one's own reasoning. It involves reflecting on one's own thought process and making corrections, which is exactly what Johnson needs to do."
    },
    {
        question: "No I have never seen any religious person or believer who has been able to empirically show me where God resides. Therefore God does not exist anywhere!\" This commits the fallacy of...",
        answers: [
            { text: "Appeal to popularity", correct: false },
            { text: "None testable claim", correct: false },
            { text: "Red herring", correct: false },
            { text: "Ignorance", correct: true }
        ],
        explanation: "This is a fallacy of **ignorance** (*ad ignorantiam*). It argues that a claim is true simply because it has not been proven false (or in this case, that a claim is false because it has not been proven true). The lack of evidence for a claim does not prove that the claim is false."
    }
];

// Get DOM elements
const quizContent = document.getElementById('quiz-content');
const questionBox = document.getElementById('question-box');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const explainButton = document.getElementById('explain-btn');
const resultsContainer = document.getElementById('results-container');
const scoreText = document.getElementById('score-text');
const restartButton = document.getElementById('restart-btn');
const explanationContainer = document.getElementById('explanation-container');
const explanationText = document.getElementById('explanation-text');
const backButton = document.getElementById('back-btn');

let currentQuestionIndex = 0;
let score = 0;
let lastSelectedAnswerCorrect = false;

// Function to start the quiz
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    resultsContainer.classList.add('hidden');
    explanationContainer.classList.add('hidden');
    quizContent.classList.remove('hidden');
    nextButton.classList.add('hidden');
    explainButton.classList.add('hidden');
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
    explainButton.classList.add('hidden');
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

// Function to handle answer selection
function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === 'true';
    lastSelectedAnswerCorrect = isCorrect;

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

    // Show both the 'Explain' and 'Next' buttons regardless of the answer.
    nextButton.classList.remove('hidden');
    explainButton.classList.remove('hidden');
}

// Function to show the explanation
function showExplanation() {
    quizContent.classList.add('hidden');
    explanationContainer.classList.remove('hidden');
    explanationText.innerHTML = questions[currentQuestionIndex].explanation;
}

// Function to go back to the question from the explanation
function goBackToQuestion() {
    explanationContainer.classList.add('hidden');
    quizContent.classList.remove('hidden');
    // The buttons are already highlighted from before, so we just need to re-show the next button.
    nextButton.classList.remove('hidden');
    explainButton.classList.add('hidden'); // Ensure explain button is hidden when returning to the question
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
nextButton.addEventListener('click', handleNextButton);
restartButton.addEventListener('click', startQuiz);
explainButton.addEventListener('click', showExplanation);
backButton.addEventListener('click', goBackToQuestion);

// Start the quiz when the page loads
document.addEventListener('DOMContentLoaded', startQuiz);
