document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.art-image');

    images.forEach(image => {
        const imageId = image.id;
        const blendModeSelect = document.getElementById(`blend-mode-${imageId}`);
        const positionXInput = document.getElementById(`position-x-${imageId}`);
        const positionYInput = document.getElementById(`position-y-${imageId}`);
        const opacityInput = document.getElementById(`opacity-${imageId}`);

        const sizeInput = document.getElementById(`size-${imageId}`);
        const rotationInput=document.getElementById(`rotation-${imageId}`);

        const widthInput=document.getElementById(`width-${imageId}`);
        const heightInput=document.getElementById(`height-${imageId}`);
        const zIndexInput=document.getElementById(`z-index-${imageId}`)


        blendModeSelect.addEventListener('change', (e) => {
            image.style.mixBlendMode = e.target.value;
        });

        positionXInput.addEventListener('input', (e) => {
            image.style.left = `${e.target.value}%`;
        });

        positionYInput.addEventListener('input', (e) => {
            image.style.top = `${e.target.value}%`;
        });

        sizeInput.addEventListener('input', (e) => {
            const size = e.target.value;
            image.style.width = `${size}%`;
            image.style.height = `${size}%`;
        });

        opacityInput.addEventListener('input', (e) => {
            const opacity = e.target.value;
            image.style.opacity = opacity;
        });

        rotationInput.addEventListener('input',(e)=>{
            const rotation=e.target.value;
            image.style.transform=`rotate(${rotation}deg)`;
        });

        widthInput.addEventListener('input',(e)=>{
            const width=e.target.value;
            image.style.width=`${width}%`;
        });

        heightInput.addEventListener('input',(e)=>{
            const height=e.target.value;
            image.style.height=`${height}%`
        });

        zIndexInput.addEventListener('input',(e)=>{
            image.style.zIndex=e.target.value;
        });


    });

    // Function to send email with snapshot (requires server-side code)
    function sendEmail() {
        const email = document.getElementById('email').value;
        // Code to capture snapshot and send email
    }

    document.getElementById('send-email').addEventListener('click', sendEmail);
});


document.addEventListener('DOMContentLoaded',()=>{
    const artContainer=document.getElementById('art-container');
    const imageUpload=document.getElementById('image-upload');
    const controls=document.getElementById('controls');

    imageUpload.addEventListener('change',(event)=>{
        const files=event.target.files;

        if(files&&files[0]){
            const img=document.createElement('img');
            img.classList.add('art-image');
            img.id=`image${artContainer.children.length + 1}`;
            img.src=URL.createObjectURL(files[0]);    
            // revoke object URL to free memory
            img.onload=()=>URL.revokeObjectURL(img.src);
            artContainer.appendChild(img);
            // create controls for the new image
            createControls(img.id);
        }
    });

    function createControls(imageId){
        const controlGroup=document.createElement('div');
        controlGroup.classList.add('control-group');
        controlGroup.innerHTML=`
                    <h3>Controls for ${imageId}</h3>

                    <div class="controlGrid">

                        <label for="blend-mode-${imageId}">Blend Mode:</label>
                        <select id="blend-mode-${imageId}" class="blend-mode">
                            <option value="normal">Normal</option>
                            <option value="multiply">Multiply</option>
                            <option value="screen">Screen</option>
                            <option value="overlay">Overlay</option>
                            <!-- Add more blend modes as needed -->
                        </select>


                        <div class="eachControl">
                            <label for="position-x-${imageId}">Position X:</label>
                            <input type="range" id="position-x-${imageId}" class="position-x" name="position-x-${imageId}"
                                min="0" max="100">
                        </div>


                        <div class="eachControl">
                            <label for="position-y-${imageId}">Position Y:</label>
                            <input type="range" id="position-y-${imageId}" class="position-y" name="position-y-${imageId}"
                                min="0" max="100">
                        </div>

                        <div class="eachControl">
                            <label for="width-${imageId}"> Width(%)</label>
                            <input type="range" id="width-${imageId}" class="width" name="rotation-${imageId}" min="10"
                                max="100">
                        </div>

                        <div class="eachControl">
                            <label for="height-${imageId}">Height(%)</label>
                            <input type="range" id="height-${imageId}" class="height" name="height-${imageId}" min="10"
                                max="100">
                        </div>

                        <div class="eachControl">
                            <label for="size-${imageId}">Size (%):</label>
                            <input type="range" id="size-${imageId}" class="size" name="size-${imageId}" min="30" max="80">
                        </div>

                        <br>
                        <br>


                        <div class="eachControl">
                            <label for="opacity-${imageId}">Opacity (%):</label>
                            <input type="range" id="opacity-${imageId}" class="opacity" name="opacity-${imageId}" min="0"
                                max="1" step="0.1">
                        </div>


                        <div class="eachControl">
                            <label for="rotation-${imageId}">
                                Rotation (deg)
                            </label>
                            <input type="range" id="rotation-${imageId}" class="rotation" name="rotation-${imageId}" min="0"
                                max="360">
                        </div>


                        <div class="eachControl">
                            <label for="z-index-${imageId}">Z-Index:</label>
                            <input type="range" id="z-index-${imageId}" class="z-index" name="z-index-${imageId}" min="0"
                                max="10">
                        </div>
                    </div>


        `;

        controls.appendChild(controlGroup);
        
        const img=document.getElementById(imageId);
        
        const uploadBlendMode=document.getElementById(`blend-mode-${imageId}`);
        const uploadPositionX=document.getElementById(`position-x-${imageId}`);
        const uploadPositionY=document.getElementById(`position-y-${imageId}`);
        const uploadWidth=document.getElementById(`width-${imageId}`);
        const uploadHeight=document.getElementById(`height-${imageId}`);
        const uploadSize=document.getElementById(`size-${imageId}`);

        const uploadOpacity=document.getElementById(`opacity-${imageId}`);
        const uploadRotation=document.getElementById(`rotation-${imageId}`);
        const uploadZindex=document.getElementById(`z-index-${imageId}`);

        uploadBlendMode.addEventListener('change',(e)=>{
            img.style.mixBlendMode=e.target.value;
        });

        uploadPositionX.addEventListener('input', (e)=>{
            img.style.left=`${e.target.value}%`;
        });

        uploadPositionY.addEventListener('input',(e)=>{
            img.style.top=`${e.target.value}%`;
        });

        uploadWidth.addEventListener('input', (e)=>{
            img.style.width=`${e.target.value}%`;
        });

        uploadHeight.addEventListener('input', (e)=>{
            img.style.height=`${e.target.value}%`;
        });

        uploadSize.addEventListener('input',(e)=>{
            const uploadSize=e.target.value;
            img.style.width=`${uploadSize}%`;
            img.style.height=`${uploadSize}%`
        })

        uploadOpacity.addEventListener('input',(e)=>{
            img.style.opacity=e.target.value;
        });

        uploadRotation.addEventListener('input',(e)=>{
            const rotationUpload=e.target.value;
            img.style.transform=`rotate(${rotationUpload}deg)`;
        });

        uploadZindex.addEventListener('input',(e)=>{
            img.style.zIndex=e.target.value;
        });


    }
});









