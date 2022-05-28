package com.indatacore.controller;

import com.indatacore.model.Order;
import com.indatacore.service.OrderService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@CrossOrigin("http://localhost:4200")
@RequestMapping("/api")
public class OrderController {
    @Autowired
    private OrderService orderService;

    @GetMapping("/orders")
    public List<Order> getOrders(){
        return orderService.allOrder();
    }

    @PostMapping("/order")
    public void createOrder(@RequestBody Order order){
        orderService.addOrder(order);
    }
}
