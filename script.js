const images = [];

function addImage() {
    const name = document.getElementById("imageName").value;
    const fileInput = document.getElementById("imageFile");
    const reporter = document.getElementById("reporterName").value;

    if (name && fileInput.files.length > 0 && reporter) {
        const file = URL.createObjectURL(fileInput.files[0]);

        images.push({ name, file, reporter });
        renderGallery();
        closeModal();
    }
}

function renderGallery() {
    const gallery = document.getElementById("gallery");
    gallery.innerHTML = "";

    images.forEach((img, index) => {
        gallery.innerHTML += `
            <div class="card">
                <img src="${img.file}" alt="${img.name}">
                <p><strong>${img.name}</strong></p>
                <p>By: ${img.reporter}</p>
            </div>
        `;
    });
}

function openModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "flex";
    modal.setAttribute('aria-hidden', 'false');
    document.getElementById("imageName").focus();
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
    modal.setAttribute('aria-hidden', 'true');
}

function previewImage() {
    const fileInput = document.getElementById("imageFile");
    const preview = document.getElementById("imagePreview");

    if (fileInput.files && fileInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            preview.src = e.target.result;
            preview.style.display = "block";
        }
        reader.readAsDataURL(fileInput.files[0]);
    }
}

function filterImages() {
    const searchValue = document.getElementById("search").value.toLowerCase();
    const filteredImages = images.filter(img => img.name.toLowerCase().includes(searchValue));
    const gallery = document.getElementById("gallery");
    gallery.innerHTML = "";

    filteredImages.forEach((img, index) => {
        gallery.innerHTML += `
            <div class="card">
                <img src="${img.file}" alt="${img.name}">
                <p><strong>${img.name}</strong></p>
                <p>By: ${img.reporter}</p>
            </div>
        `;
    });
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});