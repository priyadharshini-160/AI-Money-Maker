const express = require("express");
const app = express();

app.use(express.json());

// serve frontend files
app.use(express.static(__dirname));

// home route
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/login.html");
});

// API
app.post("/calculate", (req, res) => {

    console.log("Backend called 🔥");

    const income = Number(req.body.income);
    const expenses = Number(req.body.expenses);

    let savings = income - expenses;
    let sip = savings * 0.3;
    let emergency = expenses * 6;
    let fire = expenses * 12 * 25;

    let score = 0;

    if (savings > income * 0.3) score += 50;
    else if (savings > income * 0.1) score += 30;
    else score += 10;

    if (expenses < income * 0.7) score += 50;
    else score += 20;

    let advice = "";

    if (savings <= 0)
        advice = "🚨 Overspending! Reduce expenses!";
    else if (savings < income * 0.2)
        advice = "⚠ Save at least 20%!";
    else if (score > 80)
        advice = "🎉 Excellent financial health!";
    else
        advice = "👍 Good, improve savings!";

    res.json({
        savings,
        sip,
        emergency,
        fire,
        score,
        advice
    });
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});