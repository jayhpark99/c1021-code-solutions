  select "firstName",
         "lastName",
         sum("amount") as "totalPaid"
    from "customers" as "c"
    join "payments" as "p" using ("customerId")
group by "customerId"
order by "totalPaid" desc
