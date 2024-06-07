const fs = require('fs');
const fastify = require("fastify")();

const {getQuestions, getAnswers, getQuestionsAnswers, getQuestion, getAnswer, getQuestionAnswer} = require('./p4-module.js');

fastify.get("/cit/question", (request, reply) => {
    reply
    .code(200)
    .header("Content-Type", "text/json; charset=utf-8")
    .send({"error": "", "statusCode": 200, "questions": getQuestions()});
});

fastify.get("/cit/answer", (request, reply) => {
    reply
    .code(200)
    .header("Content-Type", "text/json; charset=utf-8")
    .send({"error": "", "statusCode": 200, "answers": getAnswers()});
});

fastify.get("/cit/questionanswer", (request, reply) => {
    reply
    .code(200)
    .header("Content-Type", "text/json; charset=utf-8")
    .send({"error": "", "statusCode": 200, "questions_answers": getQuestionsAnswers()});
});

fastify.get("/cit/question/:number", (request, reply) => {
    const {number} = request.params;
    reply
    .code(200)
    .header("Content-Type", "text/json; charset=utf-8")
    .send({"error": "", "statusCode": 200, "question": getQuestion(number).question, "number": number});
});

fastify.get("/cit/answer/:number", (request, reply) => {
    const {number} = request.params;
    reply
    .code(200)
    .header("Content-Type", "text/json; charset=utf-8")
    .send({"error": "", "statusCode": 200, "answer": getAnswer(number).answer, "number": number});
});

fastify.get("/cit/questionanswer/:number", (request, reply) => {
    const {number} = request.params;
    const {question, answer} = getQuestionAnswer(number);
    reply
    .code(200)
    .header("Content-Type", "text/json; charset=utf-8")
    .send({"error": "", "statusCode": 200, "question": question, "answer": answer, "number": number});
});

fastify.get("*", (request, reply) => {
    reply
    .code(404)
    .header("Content-Type", "text/json; charset=utf-8")
    .send({"error": "Route not found", "statusCode": 404});
});

const listenIP = 'localhost';
const listenPort = 808;
fastify.listen(listenPort, listenIP, (err, address) => {
    if (err) {
        // fastify.log.error(err);
        console.log(err);
        process.exit(1);
    }
    // fastify.log.info(`Server listening on ${address}`);
    console.log(`Server listening on ${address}`);
});
