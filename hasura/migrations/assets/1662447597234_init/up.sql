SET check_function_bodies = false;
CREATE FUNCTION public.set_current_timestamp_updated_at() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$;
CREATE TABLE public.ab (
    id integer NOT NULL,
    nam text NOT NULL
);
CREATE SEQUENCE public.ab_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.ab_id_seq OWNED BY public.ab.id;
CREATE TABLE public.contacts (
    id integer NOT NULL,
    name text NOT NULL,
    phone text NOT NULL,
    email text NOT NULL,
    job text NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    comments text
);
CREATE SEQUENCE public.contact_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.contact_id_seq OWNED BY public.contacts.id;
CREATE TABLE public.orders (
    id integer NOT NULL,
    username text NOT NULL,
    phone text NOT NULL,
    description text NOT NULL,
    faculity text NOT NULL,
    email text NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL
);
CREATE SEQUENCE public.orders_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.orders_id_seq OWNED BY public.orders.id;
CREATE TABLE public.product (
    id integer NOT NULL,
    name text NOT NULL,
    category text NOT NULL,
    price text NOT NULL,
    description text NOT NULL,
    gallery text,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now()
);
CREATE SEQUENCE public.product_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.product_id_seq OWNED BY public.product.id;
CREATE TABLE public."user" (
    id integer NOT NULL,
    name text NOT NULL,
    phone text,
    email text,
    faculity text,
    password text,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now()
);
CREATE SEQUENCE public.user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.user_id_seq OWNED BY public."user".id;
ALTER TABLE ONLY public.ab ALTER COLUMN id SET DEFAULT nextval('public.ab_id_seq'::regclass);
ALTER TABLE ONLY public.contacts ALTER COLUMN id SET DEFAULT nextval('public.contact_id_seq'::regclass);
ALTER TABLE ONLY public.orders ALTER COLUMN id SET DEFAULT nextval('public.orders_id_seq'::regclass);
ALTER TABLE ONLY public.product ALTER COLUMN id SET DEFAULT nextval('public.product_id_seq'::regclass);
ALTER TABLE ONLY public."user" ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq'::regclass);
ALTER TABLE ONLY public.ab
    ADD CONSTRAINT ab_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.contacts
    ADD CONSTRAINT contact_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.product
    ADD CONSTRAINT product_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_pkey PRIMARY KEY (id);
CREATE TRIGGER set_public_contact_updated_at BEFORE UPDATE ON public.contacts FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_contact_updated_at ON public.contacts IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_orders_updated_at BEFORE UPDATE ON public.orders FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_orders_updated_at ON public.orders IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_product_updated_at BEFORE UPDATE ON public.product FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_product_updated_at ON public.product IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_user_updated_at BEFORE UPDATE ON public."user" FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_user_updated_at ON public."user" IS 'trigger to set value of column "updated_at" to current timestamp on row update';
