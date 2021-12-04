  select "g"."name" as "genreName", count(*) as "totalMovies"
    from "actors" as "a"
    join "castMembers" as "cm" using ("actorId")
    join "films" as "f" using ("filmId")
    join "filmCategory" as "fc" using ("filmId")
    join "genres" as "g" using ("genreId")
   where "a"."firstName" = 'Lisa' and "a"."lastName" = 'Monroe'
group by "g"."name"
