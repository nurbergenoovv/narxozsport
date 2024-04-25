import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { FileSystem } from 'expo-file-system';
import { PDFReader } from 'react-native-pdf-reader';

const PDFViewer = ({ pdfUrl }) => {
  const [pdfUri, setPdfUri] = useState(null);

  useEffect(() => {
    const loadPdf = async () => {
      try {
        const pdfFile = await FileSystem.downloadAsync(pdfUrl, FileSystem.documentDirectory + 'document.pdf');
        setPdfUri(pdfFile.uri);
      } catch (error) {
        console.error('Error downloading PDF:', error);
      }    
    };

    loadPdf();
  }, [pdfUrl]);

  return (
    <View style={{ flex: 1 }}>
      {pdfUri ? (
        <PDFReader source={{ uri: pdfUri }} style={{ flex: 1 }} />
      ) : (
        <Text>Loading PDF...</Text>
      )}
    </View>
  );
};

export default PDFViewer;
