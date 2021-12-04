  select "countries"."name", count (*) as "cities"
    from "countries"
    join "cities" using ("countryId")
group by "countries"."name"
order by "countries"."name"
