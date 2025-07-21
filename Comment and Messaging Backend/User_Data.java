package com.amigoscode.jobstatus2;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import java.util.Scanner;


import java.util.Objects;

@Entity
public class User_Data {

    public static void main(String[] args){
        Scanner scp = new Scanner(System.in);
    }


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)


    private Integer id;
    private String f_name;
    private String l_name;
    private String JobApplied;
    private String ApplicationStatus;
    private String CompanyName;
    private Integer SalaryOffered;



    public User_Data() {
    }

    public User_Data(Integer id, String f_name, String l_name, String JobApplied, String ApplicationStatus,  String CompanyName, Integer SalaryOffered) {
        this.id = id;
        this.f_name = f_name;
        this.l_name = l_name;
        this.JobApplied = JobApplied;
        this.ApplicationStatus = ApplicationStatus;
        this.CompanyName = CompanyName;
        this.SalaryOffered = SalaryOffered;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getF_name() {
        return f_name;
    }

    public void setF_name(String f_name) {
        this.f_name = f_name;
    }

    public String getL_name() {
        return l_name;
    }

    public void setL_name(String l_name) {
        this.l_name = l_name;
    }

    public String getjobApplied() {
        return JobApplied;
    }
    public void setjobApplied(String JobApplied) {
        this.JobApplied = JobApplied;
    }

    public String getapplicationStatus() {
        return ApplicationStatus;
    }

    public void setapplicationStatus(String ApplicationStatus) {
        this.ApplicationStatus = ApplicationStatus;
    }

    public String getcompanyName() {
        return CompanyName;
    }
    public void setcompanyName(String CompanyName){
        this.CompanyName = CompanyName;
    }

    public Integer getsalaryOffered() {
        return SalaryOffered;
    }
    public void setsalaryOffered(Integer salaryOffered) {
        this.SalaryOffered = salaryOffered;
    }

    @Override
    public boolean equals(Object o) {
        if (o == null || getClass() != o.getClass()) return false;
        User_Data userData = (User_Data) o;
        return Objects.equals(id, userData.id) && Objects.equals(f_name, userData.f_name) && Objects.equals(l_name, userData.l_name) && Objects.equals(JobApplied, userData.JobApplied) && Objects.equals(ApplicationStatus, userData.ApplicationStatus) && Objects.equals(CompanyName, userData.CompanyName) && Objects.equals(SalaryOffered, userData.SalaryOffered);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, f_name, l_name, JobApplied, ApplicationStatus, CompanyName, SalaryOffered);
    }
}
