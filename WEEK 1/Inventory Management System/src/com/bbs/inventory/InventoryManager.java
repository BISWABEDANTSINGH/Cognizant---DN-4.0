package com.bbs.inventory;

import java.util.HashMap;
import java.util.Map;

/*
 * Step 1: Understanding the Problem
 * - In a large inventory system, efficient storage and quick lookup are critical.
 * - Using the right data structure helps in achieving O(1) or O(log n) operations.
 *
 * Suitable Data Structures:
 * - ArrayList: good for iteration and ordering but slow for lookup/delete by ID (O(n))
 * - HashMap: best for fast access/update/delete using keys (O(1) average)
 *
 * We choose HashMap<String, Product> to map productId → Product object
 */

public class InventoryManager {

    // Step 3b: Use HashMap for efficient CRUD operations
    private Map<String, Product> inventory = new HashMap<>();

    // Add a new product
    public void addProduct(Product product) {
        inventory.put(product.getProductId(), product);
        System.out.println("Product added: " + product);
    }

    // Update existing product's quantity or price
    public void updateProduct(String productId, int newQuantity, double newPrice) {
        Product product = inventory.get(productId);
        if (product != null) {
            product.setQuantity(newQuantity);
            product.setPrice(newPrice);
            System.out.println("Product updated: " + product);
        } else {
            System.out.println("Product not found for update.");
        }
    }

    // Delete a product from the inventory
    public void deleteProduct(String productId) {
        Product removed = inventory.remove(productId);
        if (removed != null) {
            System.out.println("Product removed: " + removed);
        } else {
            System.out.println("Product not found for deletion.");
        }
    }

    // Display all products
    public void listAllProducts() {
        if (inventory.isEmpty()) {
            System.out.println("Inventory is empty.");
            return;
        }
        System.out.println("All Products in Inventory:");
        for (Product product : inventory.values()) {
            System.out.println(product);
        }
    }

    public static void main(String[] args) {
        InventoryManager manager = new InventoryManager();

        // Step 3c: Add, update, delete examples
        Product p1 = new Product("P001", "Laptop", 10, 75000);
        Product p2 = new Product("P002", "Monitor", 15, 12000);
        Product p3 = new Product("P003", "Keyboard", 50, 700);

        manager.addProduct(p1);
        manager.addProduct(p2);
        manager.addProduct(p3);

        manager.listAllProducts();

        manager.updateProduct("P002", 20, 11500);
        manager.deleteProduct("P003");

        manager.listAllProducts();
    }

    /*
     * Step 4: Time Complexity Analysis
     *
     * Using HashMap:
     * - addProduct() → O(1) average
     * - updateProduct() → O(1) average
     * - deleteProduct() → O(1) average
     * - listAllProducts() → O(n), where n = number of products
     *
     * Optimization:
     * - If sorted retrieval is required (e.g., sort by price), TreeMap or custom sort on list can be used.
     * - For large datasets, consider indexing, paging, or persistent storage like databases.
     */
}
