select "c"."firstName", "c"."lastName"
  from "customers"
  join "rentals" using ("customerId")
  join "inventory" using ("inventoryId")
  join "customers" as "c" using ("customerId")
 where "inventoryId" = 2494 or "inventoryId" = 2495
