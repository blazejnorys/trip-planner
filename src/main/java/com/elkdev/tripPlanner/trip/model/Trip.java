package com.elkdev.tripPlanner.trip.model;

import com.elkdev.tripPlanner.country.model.Country;
import com.elkdev.tripPlanner.user.model.User;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import java.time.LocalDate;
import java.util.List;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
@EqualsAndHashCode(exclude = {"user","country"})
public class Trip {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private LocalDate dateFrom;
    private LocalDate dateTo;
    private String title;
    private String description;
    @Min(0)
    @Max(5)
    private Integer rate;
    @ManyToMany
    private List<Country> country;
    @ManyToOne
    private User user;

    @Override
    public String toString() {
        return "Trip{" +
                "id=" + id +
                ", dateFrom=" + dateFrom +
                ", dateTo=" + dateTo +
                ", title='" + title + '\'' +
                ", description='" + description + '\'' +
                ", rate=" + rate +
                '}';
    }

    @JsonIgnore
    public User getUser() {
        return user;
    }

}
