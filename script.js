const form = document.querySelector('#pincodeForm');
const statusMessage = document.querySelector('#statusMessage');
const resultDiv = document.querySelector('#result');
const filter = document.querySelector('#filter');
const countDiv = document.querySelector('#count');

filter.addEventListener('input', () => {
    const filterValue = filter.value.toLowerCase();
    const postOffices = resultDiv.querySelectorAll('.post-office');
    postOffices.forEach(po => {
        const officeName = po.querySelector('h3').textContent.toLowerCase();
        po.style.display = officeName.includes(filterValue) ? 'block' : 'none';      
    });
     const visibleCount = [...postOffices]
        .filter(po => po.style.display !== 'none')
        .length;
    countDiv.textContent = `Showing ${visibleCount} of ${postOffices.length} post offices`;
});
form.addEventListener('submit', pincodeChecker);
async function pincodeChecker(event) {
    event.preventDefault();
    const pincode = document.querySelector('#pincode').value;
    const pincodeValidation = /^\d{6}$/;
    if(!pincodeValidation.test(pincode)){
        statusMessage.textContent = 'Please enter a valid 6-digit pincode.';
        resultDiv.innerHTML = '';
        countDiv.textContent = '';
        return;
    }
    statusMessage.textContent = 'Checking pincode...';
    resultDiv.innerHTML = '';
    countDiv.textContent = '';
  
    try{
        const response = await fetch(`https://api.postalpincode.in/pincode/${pincodeValidation.test(pincode) ? pincode : ''}`);
        const data = await response.json();

        if(!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        if(data[0].Status === "Success"){
            const postOffices = data[0].PostOffice;
            if(postOffices && postOffices.length > 0){
                const postOfficeDetails = postOffices.map(po => `
                    <div class="post-office">
                    
                        <h3>${po.Name}</h3>
                        <p><strong>Branch Type:</strong> ${po.BranchType}</p>
                        <p><strong>District:</strong> ${po.District}</p>
                        <p><strong>State:</strong> ${po.State}</p>
                        <p><strong>Pincode:</strong> ${po.Pincode}</p>
                    </div>
                `).join('');
                statusMessage.textContent = '';
                resultDiv.innerHTML = postOfficeDetails;
            } else {
                resultDiv.textContent = 'No post offices found for the given pincode.';
            }
        } else {
            statusMessage.textContent = 'Invalid pincode. Please enter a valid 6-digit pincode.';
            resultDiv.textContent = '';
        }
    }catch(error){
        console.error('Error occurred:', error);
        statusMessage.textContent = 'An error occurred while checking the pincode.';
        resultDiv.textContent = '';
    }
}
