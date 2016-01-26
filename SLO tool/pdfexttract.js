function PdfToText(input){
      PDFJS.getDocument(input).then(function(pdf) {
		var total = pdf.numPages;
		var layers = {};        
     for (i = 1; i <= total; i++){
        pdf.getPage(i).then( function(page){
        var n = page.pageNumber;
        page.getTextContent().then( function(textContent){
          if( null != textContent.items ){
            var page_text = "";
            var last_block = null;
            for( var k = 0; k < textContent.items.length; k++ ){
                var block = textContent.items[k];
                if( last_block != null && last_block.str[last_block.str.length-1] != ' '){
                    if( block.x < last_block.x )
                        page_text += "\r\n"; 
                    else if ( last_block.y != block.y && ( last_block.str.match(/^(\s?[a-zA-Z])$|^(.+\s[a-zA-Z])$/) == null ))
                        page_text += ' ';
                }
                page_text += block.str;
                last_block = block;
				}
			return page_text;
			}
		}
	}
}
}
}