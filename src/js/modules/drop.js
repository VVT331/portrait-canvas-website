import truncationName from "../service/truncationName";

const drop = () => {
    const fileInputs = document.querySelectorAll('[name="upload"]');

    ['dragenter', 'dragleave', 'dragover', 'drop'].forEach(event => {
        fileInputs.forEach(input => {
            input.addEventListener(event, (e) => {
                e.preventDefault();
                e.stopPropagation();
            });
        });
    });

    function highlight(item) {
        item.closest('.file_upload').style.border = '5px solid yellow';
        item.closest('.file_upload').style.backgroundColor = 'rgba(0,0,0, 0.7';
    }

    function unhighlight(item) {
        item.closest('.file_upload').style.border = 'none';
        if (item.closest('.calc_form')) {
            item.closest('.file_upload').style.backgroundColor = '#c92b2b';
        } else {
            item.closest('.file_upload').style.backgroundColor = '#ededed';
        }
    }

    ['dragenter', 'dragover'].forEach(event => {
        fileInputs.forEach(input => {
            input.addEventListener(event, () => {
                highlight(input);
            });
        });
    });

    ['dragleave', 'drop'].forEach(event => {
        fileInputs.forEach(input => {
            input.addEventListener(event, () => {
                unhighlight(input);
            });
        });
    });

    fileInputs.forEach(input => {
        input.addEventListener('drop', (e) => {
            input.files = e.dataTransfer.files;

            truncationName(input.files[0].name);
        });
    });
};

export default drop;