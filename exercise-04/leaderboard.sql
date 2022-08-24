select top 10 stu.St_id, stu.st_name, gra.Marks, sub.Sub_name from 
	Student stu inner join Grade  gra on  stu.St_id=gra.St_id
	inner join Subject sub on sub.Sub_code = gra.Sub_code
	order by gra.Marks
