/*'use client'
import { useEffect } from 'react';
import QRCode from 'qrcode-generator';

interface QRCodeGeneratorProps {
    url: string; // Explicitly specify the type as string
  }

const QRCodeGenerator = ({ url }) => {
  useEffect(() => {
    if (url) {
      // Generate QR code based on the provided URL
      const qr = QRCode(0, 'H');
      qr.addData(url);
      qr.make();
      const qrCodeImage = qr.createImgTag(5, 0);

      // Display the QR code image
      document.getElementById('qrcode-container').innerHTML = qrCodeImage;
    } else {
        document.getElementById('qrcode-container').innerHTML = '<Image src="/LabMSQRCode.svg" alt="Green Circle" width="200" height="200"/>';
    }

  }, [url]);

  return <div id="qrcode-container"></div>;
};

export default QRCodeGenerator;*/