# Indian Post Office Pincode Checker

A simple web application to check Indian post office details using a six-digit pincode.

Users can enter a pincode and view the available post offices, branch type, district, and state. A search filter is also available to find post offices by name.

# Features

- Search post offices using a six-digit pincode.
- Fetch details using the India Post API.
- Display post office name, branch type, district, and state.
- Filter post offices by name.
- Show loading and error messages.
- Responsive design for mobile and desktop.

# Technologies Used

- HTML
- CSS
- JavaScript
- India Post Pincode API

# API

https://api.postalpincode.in/

# Test cases
-641027
-Rathinapuri
Branch Type: Sub Post Office
District: Coimbatore
State: Tamil Nadu
Pincode: 641027

-641028
-Odayampalayam
Branch Type: Branch Post Office
District: Coimbatore
State: Tamil Nadu
Pincode: 641028

-Sowripalayam
Branch Type: Sub Post Office
District: Coimbatore
State: Tamil Nadu
Pincode: 641028

-400001
-Bazargate
Branch Type: Sub Post Office
District: Mumbai
State: Maharashtra
Pincode: 400001

-Elephanta Caves Po
Branch Type: Branch Office directly a/w Head Office
District: Raigarh(MH)
State: Maharashtra
Pincode: 400001

-M.P.T.
Branch Type: Sub Post Office
District: Mumbai
State: Maharashtra
Pincode: 400001

-Mumbai
Branch Type: Head Post Office
District: Mumbai
State: Maharashtra
Pincode: 400001

-Stock Exchange
Branch Type: Sub Post Office
District: Mumbai
State: Maharashtra

Pincode: 400001

-Tajmahal
Branch Type: Sub Post Office
District: Mumbai
State: Maharashtra
Pincode: 400001

-Town Hall (Mumbai)
Branch Type: Sub Post Office
District: Mumbai
State: Maharashtra
Pincode: 400001


# Filter

The results can be filtered with their name and the matched results will be showed like [Showing 1 0f 2 results].

# How to Run

1. Clone or download this repository.
2. Open the project folder.
3. Open `index.html` in your browser.
4. Enter a six-digit pincode and click **Check**.
5. Use the search box to filter post offices by name.

# Project Structure

- `index.html` – Application structure
- `style.css` – Styling and responsive design
- `script.js` – Pincode search, API handling and filtering

## Note

This project uses the free India Post Pincode API. An internet connection is required to fetch post office details.