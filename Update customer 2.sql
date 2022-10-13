UPDATE public.customers
	SET first_name='Fanessa',
	last_name='Hilaire', 
-- 	email=?, 
-- 	phone=?, 
-- 	created_at=?, 
	updated_at=NOW()
	WHERE  customer_id=1;