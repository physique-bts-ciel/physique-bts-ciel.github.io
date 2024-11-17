let data = Array();
let nbData = 0;
let csvOut = "";

let config = {
    delimiter: ",",	// auto-detect
    newline: "\n",	// auto-detect
    quoteChar: '"',
    escapeChar: '"',
    header: false,
    skipEmptyLines: true,
    skipFirstNLines: 12,
    transform: false,
    };
  
function readFile(input, n) {
    const contentInfo = document.getElementById('content_'+ n);
    const reader = new FileReader();
    let file = input.files[0];

    if (file){
      reader.readAsText(file);
    }
    
    reader.onload = function() {
      let csvString = reader.result;
      //nb = csvString.match(/\n/g).length;
      csvData = csvToFloatArray(csvString);
      let nb = csvData[0].length;
      if (n==1){
        nbData = nb;
        data[0] = csvData[0];
        data[1] = csvData[1];
        document.getElementById('file_'+(n+1)).hidden = false;
        document.getElementById('content_'+n).innerText='(Record Length = ' + nb + ')';
      }
      else {
        if ((n<6) && (nb == nbData)){
          data[n] = csvData[1];
          document.getElementById('file_'+(n+1)).hidden = false;
          document.getElementById('content_'+n).innerText='(Record Length = ' + nb + ')';
        }
        else {
          console.log("Pas de la même taille !");
          document.getElementById('inputfile_'+n).value='';
          document.getElementById('content_'+n).innerText='(Record Length = ' + nb + ' is not compatible !)';
        }
        
      }


    };

    reader.onerror = function() {
      console.log(reader.error);
    };
  }

function convert(button) {
  const content = document.getElementById("csvPre");
  csvOut = floatArrayToCsv(data);
  content.innerText = csvOut;
}

function csvToFloatArray(csvString) {
    let csvParse = Papa.parse(csvString, config);
    let t = csvParse.data;
    t.splice(0,12);
    t = transpose(t);
    let x = Array();
    let y = Array(); 
    for (let i = 0; i < t[0].length; i += 10) {
      x.push(parseFloat(t[0][i]));
      y.push(parseFloat(t[1][i]));
    }
    return [x, y];
  }

function floatArrayToCsv(data) {
    data = transpose(data);
    let csvString = Papa.unparse(data, config);
    return csvString;
  }
  
function copy() {
    console.log("Data copy in clip board !");
    navigator.clipboard.writeText(csvOut);
    //alert("Copy !!");
    
  }

transpose = m => m[0].map((x,i) => m.map(x => x[i]));

  
