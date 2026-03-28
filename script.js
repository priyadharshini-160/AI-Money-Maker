function calculate() {
    let income = Number(document.getElementById("income").value);
    let expenses = Number(document.getElementById("expenses").value);
    let resultDiv = document.getElementById("result");

    // Validation
    if(income <= 0 || expenses <= 0) {
        resultDiv.innerHTML = "⚠ Enter valid values";
        return;
    }

    resultDiv.innerHTML = "⏳ Calculating...";

    // Simple calculations
    let savings = income - expenses;
    let sip = savings * 0.2; // 20% to SIP
    let emergency = savings * 0.3; // 30% to emergency fund
    let fire = savings * 12 * 10; // 10 years FIRE target
    let score = 0;

    if(savings >= income * 0.5) score = 100;
    else if(savings >= income * 0.3) score = 70;
    else score = 40;

    // Color for score
    let color = "red";
    if(score >= 70) color = "green";
    else if(score >= 40) color = "orange";

    // Suggestion
    let suggestion = income > 50000 ? 
        "Invest in Mutual Funds for long-term growth 📈" : 
        "Start with SIP and build emergency fund first 🛟";

    // Display results
    resultDiv.innerHTML = `
        <b>💰 Savings:</b> ₹${savings}<br>
        <b>📈 SIP:</b> ₹${sip}<br>
        <b>🛟 Emergency Fund:</b> ₹${emergency}<br>
        <b>🔥 FIRE Target:</b> ₹${fire}<br>
        <b>📊 Score:</b> <span style="color:${color}; font-weight:bold">${score}/100</span><br><br>
        <b>💡 Suggestion:</b> ${suggestion}
    `;
}