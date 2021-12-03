select "c"."firstName", "c"."lastName"
  from "customers"
  join "rentals" using ("customerId")
  join "inventory" using ("inventoryId")
  join "films" as "f" using ("filmId")
  join "customers" as "c" using ("customerId")
 where "f"."title" = 'Magic Mallrats'

--  inventoryId" = 2494 or "inventoryId" = 2495
