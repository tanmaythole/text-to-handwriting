import React from 'react';
import { Button, Container } from 'react-bootstrap';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const DownloadBtns = () => {
    const saveAs = (blob, fileName) =>{
        var elem = window.document.createElement('a');
        elem.href = blob
        elem.download = fileName;
        elem.style = 'display:none;';
        (document.body || document.documentElement).appendChild(elem);
        if (typeof elem.click === 'function') {
          elem.click();
        } else {
          elem.target = '_blank';
          elem.dispatchEvent(new MouseEvent('click', {
            view: window,
            bubbles: true,
            cancelable: true
          }));
        }
        URL.revokeObjectURL(elem.href);
        elem.remove()
    }


    const handleImageDownload = () => {
      html2canvas(document.getElementById('outputSection')).then((canvas)=>{
          const image = canvas.toDataURL('image.png');
          saveAs(image, 'image.png');
      })
    }

    const handlePdfDownload = () => {
      html2canvas(document.getElementById('outputSection')).then((canvas) => {
        const image = canvas.toDataURL('image.png');
        const pdf = new jsPDF();
        const imgProps= pdf.getImageProperties(image);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
        pdf.addImage(image, 'PNG',0,0,pdfWidth, pdfHeight);
        pdf.save("converted.pdf");
      })
    }
    return (
        <Container className="my-4 col-md-4 text-center d-flex justify-content-around">
            <Button size="lg" style={{borderRadius:"38px"}} onClick={handleImageDownload}>Save Image</Button>
            <Button size="lg" style={{borderRadius:"38px"}} onClick={handlePdfDownload}>Save as Pdf</Button>
        </Container>
    )
}

export default DownloadBtns
