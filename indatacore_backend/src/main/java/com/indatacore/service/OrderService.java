package com.indatacore.service;

import com.indatacore.model.Order;
import com.indatacore.repository.OrderRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Service;

import java.io.*;
import java.util.Arrays;
import java.util.List;
import java.util.Random;

@RequiredArgsConstructor
@Service
public class OrderService implements CommandLineRunner {
    @Autowired
    private OrderRepository orderRepository;


    @Override
    public void run(String... args) throws Exception {
        BufferedReader br = new BufferedReader(new FileReader("src/main/resources/order.csv"));
        String line = "";
        while ((line = br.readLine()) != null){
            List<String> data = Arrays.asList(line.split(","));
            Order order = new Order();
            order.setName(data.get(0));
            order.setDescription(data.get(1));
            order.setQuantity(Integer.parseInt(data.get(2)));
            orderRepository.save(order);
        }
    }

    public void addOrder(Order order){
        orderRepository.save(order);
    }

    public List<Order> allOrder(){
        return orderRepository.findAll();
    }

    public void randomData(){
        Random random = new Random();
        Order ord = new Order();
        ord.setName(randomString(48, 122, 10));
        ord.setQuantity(random.nextInt(100));
        ord.setDescription(randomString(48, 122, 10));
        orderRepository.save(ord);
    }

    public String randomString(int leftLimit, int rightLimit, int targetStringLength){
        Random random = new Random();
        String generatedString = random.ints(leftLimit, rightLimit + 1)
                .filter(i -> (i <= 57 || i >= 65) && (i <= 90 || i >= 97))
                .limit(targetStringLength)
                .collect(StringBuilder::new, StringBuilder::appendCodePoint, StringBuilder::append)
                .toString();
        return generatedString;
    }
}
