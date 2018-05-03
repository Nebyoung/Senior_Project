	.file	"YoungB_Lab5_308.c"
	.section	.rodata
.LC1:
	.string	"\n2.2 -> %d\n"
.LC2:
	.string	"\n2.7 -> %d\n"
.LC3:
	.string	"\n-2.2 -> %d\n"
.LC4:
	.string	"\n-2.7 -> %d\n"
	.text
	.globl	main
	.type	main, @function
main:
.LFB2:
	.cfi_startproc
	pushq	%rbp
	.cfi_def_cfa_offset 16
	.cfi_offset 6, -16
	movq	%rsp, %rbp
	.cfi_def_cfa_register 6
	subq	$112, %rsp
	movq	%fs:40, %rax
	movq	%rax, -8(%rbp)
	xorl	%eax, %eax
	leaq	-96(%rbp), %rax
	movl	$6451010, (%rax)
	movl	$20, -64(%rbp)
	leaq	-96(%rbp), %rax
	addq	$40, %rax
	movabsq	$28556934560034123, %rdx
	movq	%rdx, (%rax)
	movsd	.LC0(%rip), %xmm0
	movsd	%xmm0, -24(%rbp)
	movl	$1, -16(%rbp)
	leaq	-96(%rbp), %rax
	movq	%rax, %rdi
	call	printPerson
	movl	$10, %edi
	call	putchar@PLT
	movl	$88, %edi
	call	malloc@PLT
	movq	%rax, -104(%rbp)
	movq	-104(%rbp), %rax
	movl	$1936288833, (%rax)
	movw	$28271, 4(%rax)
	movb	$0, 6(%rax)
	movq	-104(%rbp), %rax
	movl	$10, 32(%rax)
	movq	-104(%rbp), %rax
	addq	$40, %rax
	movabsq	$4692857895696559425, %rcx
	movq	%rcx, (%rax)
	movabsq	$7801677545177312882, %rdx
	movq	%rdx, 8(%rax)
	movabsq	$8751164178630536549, %rcx
	movq	%rcx, 16(%rax)
	movb	$0, 24(%rax)
	movq	-104(%rbp), %rax
	movl	$0, 80(%rax)
	movq	-104(%rbp), %rax
	movq	%rax, %rdi
	call	printPerson
	movq	-104(%rbp), %rax
	movq	%rax, %rdi
	call	free@PLT
	movl	$2, %esi
	leaq	.LC1(%rip), %rdi
	movl	$0, %eax
	call	printf@PLT
	movl	$3, %esi
	leaq	.LC2(%rip), %rdi
	movl	$0, %eax
	call	printf@PLT
	movl	$-2, %esi
	leaq	.LC3(%rip), %rdi
	movl	$0, %eax
	call	printf@PLT
	movl	$-3, %esi
	leaq	.LC4(%rip), %rdi
	movl	$0, %eax
	call	printf@PLT
	nop
	movq	-8(%rbp), %rax
	xorq	%fs:40, %rax
	je	.L2
	call	__stack_chk_fail@PLT
.L2:
	leave
	.cfi_def_cfa 7, 8
	ret
	.cfi_endproc
.LFE2:
	.size	main, .-main
	.section	.rodata
.LC5:
	.string	"Name is %s\n"
.LC6:
	.string	"Age is %d\n"
.LC7:
	.string	"School is %s\n"
.LC8:
	.string	"GPA is %e\n"
.LC9:
	.string	"Company is %s\n"
.LC10:
	.string	"Salray is %e\n"
	.text
	.globl	printPerson
	.type	printPerson, @function
printPerson:
.LFB3:
	.cfi_startproc
	pushq	%rbp
	.cfi_def_cfa_offset 16
	.cfi_offset 6, -16
	movq	%rsp, %rbp
	.cfi_def_cfa_register 6
	subq	$16, %rsp
	movq	%rdi, -8(%rbp)
	movq	-8(%rbp), %rax
	movq	%rax, %rsi
	leaq	.LC5(%rip), %rdi
	movl	$0, %eax
	call	printf@PLT
	movq	-8(%rbp), %rax
	movl	32(%rax), %eax
	movl	%eax, %esi
	leaq	.LC6(%rip), %rdi
	movl	$0, %eax
	call	printf@PLT
	movq	-8(%rbp), %rax
	movl	80(%rax), %eax
	testl	%eax, %eax
	jne	.L4
	movq	-8(%rbp), %rax
	addq	$40, %rax
	movq	%rax, %rsi
	leaq	.LC7(%rip), %rdi
	movl	$0, %eax
	call	printf@PLT
	jmp	.L7
.L4:
	movq	-8(%rbp), %rax
	movl	80(%rax), %eax
	cmpl	$1, %eax
	jne	.L6
	movq	-8(%rbp), %rax
	addq	$40, %rax
	movq	%rax, %rsi
	leaq	.LC7(%rip), %rdi
	movl	$0, %eax
	call	printf@PLT
	movq	-8(%rbp), %rax
	movq	72(%rax), %rax
	movq	%rax, -16(%rbp)
	movsd	-16(%rbp), %xmm0
	leaq	.LC8(%rip), %rdi
	movl	$1, %eax
	call	printf@PLT
	jmp	.L7
.L6:
	movq	-8(%rbp), %rax
	movl	80(%rax), %eax
	cmpl	$2, %eax
	jne	.L7
	movq	-8(%rbp), %rax
	addq	$40, %rax
	movq	%rax, %rsi
	leaq	.LC9(%rip), %rdi
	movl	$0, %eax
	call	printf@PLT
	movq	-8(%rbp), %rax
	movq	72(%rax), %rax
	movq	%rax, -16(%rbp)
	movsd	-16(%rbp), %xmm0
	leaq	.LC10(%rip), %rdi
	movl	$1, %eax
	call	printf@PLT
.L7:
	nop
	leave
	.cfi_def_cfa 7, 8
	ret
	.cfi_endproc
.LFE3:
	.size	printPerson, .-printPerson
	.section	.rodata
	.align 8
.LC0:
	.long	0
	.long	1074528256
	.ident	"GCC: (Ubuntu 6.3.0-12ubuntu2) 6.3.0 20170406"
	.section	.note.GNU-stack,"",@progbits
