import jsPDF from "jspdf"

export function generatePDF(
  city,
  temperature,
  cloud,
  energy,
  savings,
  score
) {

  const doc = new jsPDF()

  // Title

  doc.setFont("helvetica", "bold")
  doc.setFontSize(22)

  doc.text(
    "AI SOLAR REPORT",
    20,
    20
  )

  // Divider

  doc.line(
    20,
    28,
    190,
    28
  )

  // City

  doc.setFontSize(16)

  doc.text(
    `City: ${city}`,
    20,
    45
  )

  // Weather Section

  doc.setFontSize(18)

  doc.text(
    "Weather Details",
    20,
    65
  )

  doc.setFontSize(14)

  doc.text(
    `Temperature: ${temperature} °C`,
    25,
    80
  )

  doc.text(
    `Cloud Cover: ${cloud}%`,
    25,
    95
  )

  // Solar Section

  doc.setFontSize(18)

  doc.text(
    "Solar Analysis",
    20,
    120
  )

  doc.setFontSize(14)

  doc.text(
    `Predicted Energy: ${energy} kWh`,
    25,
    135
  )

  doc.text(
    `Estimated Savings: INR ${savings}`,
    25,
    150
  )

  doc.text(
    `Efficiency Score: ${score}%`,
    25,
    165
  )

  // Footer

  doc.setFontSize(12)

  doc.text(
    `Generated On: ${new Date().toLocaleDateString()}`,
    20,
    250
  )

  doc.save(
    "solar-report.pdf"
  )

}

function PDFReport() {

  return null

}

export default PDFReport