PGDMP                         w        	   Unit4Test    11.3    11.3 
    �
           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                       false            �
           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                       false            �
           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                       false                        1262    16575 	   Unit4Test    DATABASE     �   CREATE DATABASE "Unit4Test" WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'English_United States.1252' LC_CTYPE = 'English_United States.1252';
    DROP DATABASE "Unit4Test";
             postgres    false                       0    0    DATABASE "Unit4Test"    COMMENT     `   COMMENT ON DATABASE "Unit4Test" IS 'A database I made for GC Unit 4 practice/testing purposes';
                  postgres    false    2816            �            1259    16576    earthworm_jim_characters    TABLE     �   CREATE TABLE public.earthworm_jim_characters (
    id integer NOT NULL,
    character_name character varying(40) NOT NULL,
    character_alignment character varying(20) NOT NULL,
    character_image character varying(200)
);
 ,   DROP TABLE public.earthworm_jim_characters;
       public         postgres    false            �            1259    16598    earthworm_jim_characters_id_seq    SEQUENCE     �   ALTER TABLE public.earthworm_jim_characters ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.earthworm_jim_characters_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public       postgres    false    196            �
          0    16576    earthworm_jim_characters 
   TABLE DATA               l   COPY public.earthworm_jim_characters (id, character_name, character_alignment, character_image) FROM stdin;
    public       postgres    false    196   �
                  0    0    earthworm_jim_characters_id_seq    SEQUENCE SET     N   SELECT pg_catalog.setval('public.earthworm_jim_characters_id_seq', 26, true);
            public       postgres    false    197            
           2606    16583 6   earthworm_jim_characters earthworm_jim_characters_pkey 
   CONSTRAINT     t   ALTER TABLE ONLY public.earthworm_jim_characters
    ADD CONSTRAINT earthworm_jim_characters_pkey PRIMARY KEY (id);
 `   ALTER TABLE ONLY public.earthworm_jim_characters DROP CONSTRAINT earthworm_jim_characters_pkey;
       public         postgres    false    196            �
   Q  x���Qo�0�����\ۀ�����n�6e�ԇiRd�7`G�i�?C�v���CH�Bp�ǹ�^\q�ڽ6}x#��Z�:h��ٷ �q'���\�R�e\��]�ym�V�k�����|�c��;��w�\��n*0��F	�D��[�c�+��R��!��Ȟ7��a���x�0�^Z�t�	�Ϋ�ńJ2��4�(9�\	'̬�D5]Oϕ=z9�e�ڨ�{��'�I�q���4X�2�]+�O��	�uWo�mg�a�)x���ׁ���'��MO��`�a�R�Y(T	|7ܶW>.��cFMh�&�+�7�Zm��Zm�!z�Mt}��E�C^���>�yvF�����3\�)Z34Zs��,��zJ�s(O� >#�3�+{/���*WC]�W��@D^�٧�[D(NH���� �
�uCsj�rp�|�a0ɍj^�b�z��ν-YJ������c�^ǥ�dC����\GK^m�UGS`^�)��=FQ?,C�ƾ���Z���xD�@\v�ZY�ˡ�����S� �_#�,���>E��k�r��GƲo3-k}�k��AǙ<WڈZQ9�3F�>�*     