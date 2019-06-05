PART TWO: 2 CODE CHALLENGES

For part 2, you can use your notes, book, the internet, and your text editor. You will be
asked to…
    ● Do an AngularJS code challenge that may involve any mix of the following:

        ○ Creating components that need templates, controllers, and bindings. Both one-way (<) and function (&) bindings may be required.

        ○ Obtaining data from an API and displaying the results within a component.

        ○ Set up routing within an application to allow users to view various routes.

    ● Do a Node.js / Express / SQL code challenge that may involve any mix of the following:

        ○ Creates an Express server that contains routes for each CRUD command.
        
        ○ Write queries to manipulate a PostgreSQL database.


General app layout:
    home page - game description, some links
    hero page - earthworm jim image, alignment, maybe a bio
    villain page - each villain pictured, named

User stories:
    user can navigate between routes via the header links #!'s
    user can see hero/villains displayed and read their names/info
    user can add villains 
    user can remove villains by name
    user can modify villain information - including images
    user see's a fallback image for broken image paths
    user is alerted when invalid villain is targeted for removal/updating


FYI a lot of the text was shamelessly ripped from the internet from wikipedia and wikia

SQL stuff to paste into your query tool (postgres) and make a table that works w/this app:

    -- Table: public.earthworm_jim_characters

    -- DROP TABLE public.earthworm_jim_characters;

    CREATE TABLE public.earthworm_jim_characters
    (
        id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
        character_name character varying(40) COLLATE pg_catalog."default" NOT NULL,
        character_alignment character varying(20) COLLATE pg_catalog."default" NOT NULL,
        character_image character varying(200) COLLATE pg_catalog."default",
        CONSTRAINT earthworm_jim_characters_pkey PRIMARY KEY (id)
    )
    WITH (
        OIDS = FALSE
    )
    TABLESPACE pg_default;

    ALTER TABLE public.earthworm_jim_characters
        OWNER to postgres;

    
    Not sure how to get the data create commands just yet..