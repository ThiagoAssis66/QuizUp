export const validateQuestions = (questions) => {
    return (
      Array.isArray(questions) &&
      questions.every(
        (q) =>
          typeof q.question === 'string' &&
          Array.isArray(q.answers) &&
          q.answers.every(
            (a) => typeof a.text === 'string' && typeof a.isCorrect === 'boolean'
          )
      )
    );
  };
  