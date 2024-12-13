// Function to simulate viewing a product
function viewProduct(productId) {
    let productDetails = "";

    switch(productId) {
        case '1':
            productDetails = `
                <h2>Organic Fertilizer</h2>
                <p><strong>Description:</strong> Our organic fertilizer is made from the finest natural ingredients that enrich the soil, promoting healthy plant growth and improving crop yield. It is safe, eco-friendly, and perfect for all types of crops.</p>
                <p><strong>Benefits:</strong></p>
                <ul>
                    <li>Improves soil structure</li>
                    <li>Enhances nutrient retention</li>
                    <li>Eco-friendly and chemical-free</li>
                    <li>Promotes better root development</li>
                </ul>
                <p>Price: ₹500 per bag</p>
            `;
            break;
        case '2':
            productDetails = `
                <h2>High Yield Seeds</h2>
                <p><strong>Description:</strong> Our high-yield seeds are carefully selected for better resistance to pests, diseases, and adverse weather conditions. These seeds ensure better productivity and profitability for the farmers.</p>
                <p><strong>Varieties Available:</strong></p>
                <ul>
                    <li>Wheat</li>
                    <li>Rice</li>
                    <li>Vegetables</li>
                    <li>Fruits</li>
                </ul>
                <p>Price: ₹100 per packet</p>
            `;
            break;
        case '3':
            productDetails = `
                <h2>Farm Tools Kit</h2>
                <p><strong>Description:</strong> The Farm Tools Kit contains essential tools required for day-to-day farming activities. It includes shovels, hoes, sickles, and other equipment, all made of durable, high-quality materials.</p>
                <p><strong>Included Tools:</strong></p>
                <ul>
                    <li>Shovel</li>
                    <li>Hoe</li>
                    <li>Sickle</li>
                    <li>Spade</li>
                </ul>
                <p>Price: ₹2000 per kit</p>
            `;
            break;
        case '4':
            productDetails = `
                <h2>Tractor</h2>
                <p><strong>Description:</strong> Our high-efficiency tractor is perfect for large-scale farms. It offers easy maintenance, great fuel efficiency, and higher productivity. Available with various attachment options for different farming needs.</p>
                <p><strong>Features:</strong></p>
                <ul>
                    <li>Powerful engine</li>
                    <li>Fuel efficient</li>
                    <li>Easy to maintain</li>
                    <li>Multiple attachments available</li>
                </ul>
                <p>Price: ₹4,00,000</p>
            `;
            break;
        default:
            productDetails = "<p>Product not found.</p>";
            break;
    }

    // Display the product details (this can be done in a modal or a new page, here we are using an alert for simplicity)
    alert(productDetails);
}
