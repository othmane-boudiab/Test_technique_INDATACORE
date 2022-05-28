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
}
