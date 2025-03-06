

function compressImage(){
    
const image = document.getElementById('image');
const download = document.getElementById('download');
const quality = document.getElementById('Quality');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');



if(image.files.length===0){
    alert("first upload image");
    return;
}

const file = image.files[0];
console.log(file)
const read = new FileReader();

read.onload = function (event){
    const img = new Image();
    img.onload= function(){
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img,0,0,img.width,img.height);


        let qualityNum= parseFloat(quality.value);
        if(isNaN(qualityNum)|| qualityNum<0.1 || qualityNum>1){
            alert("please enter the valid  quantity between 0.1 and 1");
            return;
        }

        download.href = canvas.toDataURL("image/webp", quality);
        download.style.display = "block";
        download.innerText = "Download Compressed Image";


 
    };
    img.src = event.target.result;

};
read.readAsDataURL(file);

}