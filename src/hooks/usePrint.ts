import { OrderType } from "@/lib/types";
import jsPDF from "jspdf"; 
 
export const usePrint = (cartItems: OrderType[]) => {
  const doc = new jsPDF();
  let y = 15;
  const itemsPerPage = 10;
  let itemCount = 0;

  doc.setFontSize(18);
  doc.text("Commune Haus Order Details", 10, y);
  y += 8;

  doc.setFontSize(12);
  doc.text("===================================", 10, y);
  y += 8;

  cartItems.forEach((item) => {
    // Add new page for every 10 items (except the first page)
    if (itemCount > 0 && itemCount % itemsPerPage === 0) {
      doc.addPage();
      y = 15;
      doc.setFontSize(18);
      doc.text("Commune Haus Order Details", 10, y);
      y += 8;
      doc.setFontSize(12);
      doc.text("===================================", 10, y);
      y += 8;
    }
    itemCount++;

    doc.setFont("helvetica", "bold");
    doc.text(`${item.name}`, 10, y);
    doc.setFont("helvetica", "normal");
    doc.text(
      `${item.price?.toLocaleString('en-PH', { style: 'currency', currency: 'PHP' })}`,
      120,
      y
    );
    y += 7;

    if (item.modifications && item.modifications.length > 0) {
      item.modifications.forEach((modification) => {
        doc.setFontSize(10);
        doc.text(
          `- ${modification.type}: ${modification.selectedOption}`,
          14,
          y
        );
        y += 5;
        doc.setFontSize(12);
      });
    }
    y += 3; // Extra space between items
  });

  // Add totals on a new page if the last page is full
  if (itemCount % itemsPerPage === 0 && cartItems.length > 0) {
    doc.addPage();
    y = 15;
  }

  y += 5;
  doc.text("===================================", 10, y);
  y += 8;

  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.text(
    `Total: ${cartItems.reduce((total, item) => total + (item.price || 0), 0).toLocaleString('en-PH', { style: 'currency', currency: 'PHP' })}`,
    10,
    y
  );

  doc.save("order-details.pdf");
};