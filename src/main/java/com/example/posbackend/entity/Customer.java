package com.example.posbackend.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.*;

import java.sql.Date;
import java.util.List;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
public class Customer {
    @Id
    private String custId;
    private String name;
    private String address;
    private double salary;

    @OneToMany(mappedBy = "customer",fetch = FetchType.LAZY)
    private List<Orders> orders;
}
