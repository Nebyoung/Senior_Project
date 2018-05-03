	.file	"AddTwoMatrices.c"
	.section	.rodata
	.align 8
.LC0:
	.string	"Enter number of rows (between 1 and 100): "
.LC1:
	.string	"%d"
	.align 8
.LC2:
	.string	"Enter number of columns (between 1 and 100): "
	.align 8
.LC3:
	.string	"\nEnter elements of 1st matrix:"
.LC4:
	.string	"Enter element a%d%d: "
.LC5:
	.string	"Enter elements of 2nd matrix:"
.LC6:
	.string	"\nSum of two matrix is: \n"
.LC7:
	.string	"%d   "
.LC8:
	.string	"\n"
	.text
	.globl	main
	.type	main, @function
main:
.LFB0:
	.cfi_startproc
	pushq	%rbp
	.cfi_def_cfa_offset 16
	.cfi_offset 6, -16
	movq	%rsp, %rbp
	.cfi_def_cfa_register 6
	subq	$120032, %rsp
	movq	%fs:40, %rax
	movq	%rax, -8(%rbp)
	xorl	%eax, %eax
	leaq	.LC0(%rip), %rdi
	movl	$0, %eax
	call	printf@PLT
	leaq	-120032(%rbp), %rax
	movq	%rax, %rsi
	leaq	.LC1(%rip), %rdi
	movl	$0, %eax
	call	__isoc99_scanf@PLT
	leaq	.LC2(%rip), %rdi
	movl	$0, %eax
	call	printf@PLT
	leaq	-120028(%rbp), %rax
	movq	%rax, %rsi
	leaq	.LC1(%rip), %rdi
	movl	$0, %eax
	call	__isoc99_scanf@PLT
	leaq	.LC3(%rip), %rdi
	call	puts@PLT
	movl	$0, -120024(%rbp)
	jmp	.L2
.L5:
	movl	$0, -120020(%rbp)
	jmp	.L3
.L4:
	movl	-120020(%rbp), %eax
	leal	1(%rax), %edx
	movl	-120024(%rbp), %eax
	addl	$1, %eax
	movl	%eax, %esi
	leaq	.LC4(%rip), %rdi
	movl	$0, %eax
	call	printf@PLT
	leaq	-120016(%rbp), %rcx
	movl	-120020(%rbp), %eax
	movslq	%eax, %rsi
	movl	-120024(%rbp), %eax
	movslq	%eax, %rdx
	movq	%rdx, %rax
	salq	$2, %rax
	addq	%rdx, %rax
	leaq	0(,%rax,4), %rdx
	addq	%rdx, %rax
	salq	$2, %rax
	addq	%rsi, %rax
	salq	$2, %rax
	addq	%rcx, %rax
	movq	%rax, %rsi
	leaq	.LC1(%rip), %rdi
	movl	$0, %eax
	call	__isoc99_scanf@PLT
	addl	$1, -120020(%rbp)
.L3:
	movl	-120028(%rbp), %eax
	cmpl	%eax, -120020(%rbp)
	jl	.L4
	addl	$1, -120024(%rbp)
.L2:
	movl	-120032(%rbp), %eax
	cmpl	%eax, -120024(%rbp)
	jl	.L5
	leaq	.LC5(%rip), %rdi
	call	puts@PLT
	movl	$0, -120024(%rbp)
	jmp	.L6
.L9:
	movl	$0, -120020(%rbp)
	jmp	.L7
.L8:
	movl	-120020(%rbp), %eax
	leal	1(%rax), %edx
	movl	-120024(%rbp), %eax
	addl	$1, %eax
	movl	%eax, %esi
	leaq	.LC4(%rip), %rdi
	movl	$0, %eax
	call	printf@PLT
	leaq	-80016(%rbp), %rcx
	movl	-120020(%rbp), %eax
	movslq	%eax, %rsi
	movl	-120024(%rbp), %eax
	movslq	%eax, %rdx
	movq	%rdx, %rax
	salq	$2, %rax
	addq	%rdx, %rax
	leaq	0(,%rax,4), %rdx
	addq	%rdx, %rax
	salq	$2, %rax
	addq	%rsi, %rax
	salq	$2, %rax
	addq	%rcx, %rax
	movq	%rax, %rsi
	leaq	.LC1(%rip), %rdi
	movl	$0, %eax
	call	__isoc99_scanf@PLT
	addl	$1, -120020(%rbp)
.L7:
	movl	-120028(%rbp), %eax
	cmpl	%eax, -120020(%rbp)
	jl	.L8
	addl	$1, -120024(%rbp)
.L6:
	movl	-120032(%rbp), %eax
	cmpl	%eax, -120024(%rbp)
	jl	.L9
	movl	$0, -120024(%rbp)
	jmp	.L10
.L13:
	movl	$0, -120020(%rbp)
	jmp	.L11
.L12:
	movl	-120020(%rbp), %eax
	movslq	%eax, %rcx
	movl	-120024(%rbp), %eax
	movslq	%eax, %rdx
	movq	%rdx, %rax
	salq	$2, %rax
	addq	%rdx, %rax
	leaq	0(,%rax,4), %rdx
	addq	%rdx, %rax
	salq	$2, %rax
	addq	%rcx, %rax
	movl	-120016(%rbp,%rax,4), %ecx
	movl	-120020(%rbp), %eax
	movslq	%eax, %rsi
	movl	-120024(%rbp), %eax
	movslq	%eax, %rdx
	movq	%rdx, %rax
	salq	$2, %rax
	addq	%rdx, %rax
	leaq	0(,%rax,4), %rdx
	addq	%rdx, %rax
	salq	$2, %rax
	addq	%rsi, %rax
	movl	-80016(%rbp,%rax,4), %eax
	addl	%eax, %ecx
	movl	-120020(%rbp), %eax
	movslq	%eax, %rsi
	movl	-120024(%rbp), %eax
	movslq	%eax, %rdx
	movq	%rdx, %rax
	salq	$2, %rax
	addq	%rdx, %rax
	leaq	0(,%rax,4), %rdx
	addq	%rdx, %rax
	salq	$2, %rax
	addq	%rsi, %rax
	movl	%ecx, -40016(%rbp,%rax,4)
	addl	$1, -120020(%rbp)
.L11:
	movl	-120028(%rbp), %eax
	cmpl	%eax, -120020(%rbp)
	jl	.L12
	addl	$1, -120024(%rbp)
.L10:
	movl	-120032(%rbp), %eax
	cmpl	%eax, -120024(%rbp)
	jl	.L13
	leaq	.LC6(%rip), %rdi
	call	puts@PLT
	movl	$0, -120024(%rbp)
	jmp	.L14
.L18:
	movl	$0, -120020(%rbp)
	jmp	.L15
.L17:
	movl	-120020(%rbp), %eax
	movslq	%eax, %rcx
	movl	-120024(%rbp), %eax
	movslq	%eax, %rdx
	movq	%rdx, %rax
	salq	$2, %rax
	addq	%rdx, %rax
	leaq	0(,%rax,4), %rdx
	addq	%rdx, %rax
	salq	$2, %rax
	addq	%rcx, %rax
	movl	-40016(%rbp,%rax,4), %eax
	movl	%eax, %esi
	leaq	.LC7(%rip), %rdi
	movl	$0, %eax
	call	printf@PLT
	movl	-120028(%rbp), %eax
	subl	$1, %eax
	cmpl	-120020(%rbp), %eax
	jne	.L16
	leaq	.LC8(%rip), %rdi
	call	puts@PLT
.L16:
	addl	$1, -120020(%rbp)
.L15:
	movl	-120028(%rbp), %eax
	cmpl	%eax, -120020(%rbp)
	jl	.L17
	addl	$1, -120024(%rbp)
.L14:
	movl	-120032(%rbp), %eax
	cmpl	%eax, -120024(%rbp)
	jl	.L18
	movl	$0, %eax
	movq	-8(%rbp), %rcx
	xorq	%fs:40, %rcx
	je	.L20
	call	__stack_chk_fail@PLT
.L20:
	leave
	.cfi_def_cfa 7, 8
	ret
	.cfi_endproc
.LFE0:
	.size	main, .-main
	.ident	"GCC: (Ubuntu 6.3.0-12ubuntu2) 6.3.0 20170406"
	.section	.note.GNU-stack,"",@progbits
