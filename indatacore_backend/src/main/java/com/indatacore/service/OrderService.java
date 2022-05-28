package com.indatacore.service;

import com.indatacore.model.Order;
import com.indatacore.repository.OrderRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;

//@RequiredArgsConstructor
@Service
public class OrderService {
    @Autowired
    private OrderRepository orderRepository;

    String line = "";

    public void saveOrderData(){
        try {
            BufferedReader br = new BufferedReader(new FileReader("src/main/resources/order.csv"));
            while ((line = br.readLine()) != null){
                String [] data = line.split(",");
                Order order = new Order();
                order.setName(data[0]);
                order.setQuantity(Integer.parseInt(data[1]));
                orderRepository.save(order);
            }
        }catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }

    }
}
