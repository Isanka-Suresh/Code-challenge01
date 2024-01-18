package com.example.posbackend.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import lombok.*;

import java.util.List;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
public class Item {
    @Id
    private String itemId;
    private String itemName;
    private double price;
    private int qty;

    @ManyToMany(mappedBy = "items", fetch = FetchType.LAZY)
    private List<Orders> orders;
}
