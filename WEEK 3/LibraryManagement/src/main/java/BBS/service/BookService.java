package BBS.service;

import BBS.repository.BookRepository;

public class BookService {
    private BookRepository bookRepository;

    // Setter for Spring to inject
    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void addBook(String name) {
        System.out.println("Adding book: " + name);
        bookRepository.saveBook(name);
    }
}
