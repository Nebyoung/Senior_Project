	.file	"Project1_Question1_Server.c"
	.section	.rodata
	.align 8
.LC0:
	.string	"server: can't open datagram socket"
	.align 8
.LC1:
	.string	"server: can't bind local address"
.LC2:
	.string	"Received: %c \n"
.LC3:
	.string	"%T"
.LC4:
	.string	"%d"
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
	pushq	%rbx
	subq	$200, %rsp
	.cfi_offset 3, -24
	movl	%edi, -196(%rbp)
	movq	%rsi, -208(%rbp)
	movq	%fs:40, %rax
	movq	%rax, -24(%rbp)
	xorl	%eax, %eax
	movl	$0, %edx
	movl	$2, %esi
	movl	$2, %edi
	call	socket@PLT
	movl	%eax, -180(%rbp)
	cmpl	$0, -180(%rbp)
	jns	.L2
	leaq	.LC0(%rip), %rdi
	call	perror@PLT
	movl	$1, %edi
	call	exit@PLT
.L2:
	leaq	-144(%rbp), %rax
	movl	$16, %edx
	movl	$0, %esi
	movq	%rax, %rdi
	call	memset@PLT
	movw	$2, -144(%rbp)
	movl	$0, %edi
	call	htonl@PLT
	movl	%eax, -140(%rbp)
	movl	$9999, %edi
	call	htons@PLT
	movw	%ax, -142(%rbp)
	leaq	-144(%rbp), %rcx
	movl	-180(%rbp), %eax
	movl	$16, %edx
	movq	%rcx, %rsi
	movl	%eax, %edi
	call	bind@PLT
	testl	%eax, %eax
	jns	.L3
	leaq	.LC1(%rip), %rdi
	call	perror@PLT
	movl	$1, %edi
	call	exit@PLT
.L3:
	movl	$16, -184(%rbp)
	leaq	-184(%rbp), %rcx
	leaq	-160(%rbp), %rdx
	leaq	-185(%rbp), %rsi
	movl	-180(%rbp), %eax
	movq	%rcx, %r9
	movq	%rdx, %r8
	movl	$0, %ecx
	movl	$1, %edx
	movl	%eax, %edi
	call	recvfrom@PLT
	movzbl	-185(%rbp), %eax
	movsbl	%al, %eax
	movl	%eax, %esi
	leaq	.LC2(%rip), %rdi
	movl	$0, %eax
	call	printf@PLT
	movl	$0, %edi
	call	time@PLT
	movq	%rax, -176(%rbp)
	leaq	-176(%rbp), %rax
	movq	%rax, %rdi
	call	localtime@PLT
	movq	%rax, -168(%rbp)
	movzbl	-185(%rbp), %eax
	movsbl	%al, %eax
	cmpl	$49, %eax
	je	.L5
	cmpl	$49, %eax
	jg	.L6
	cmpl	$48, %eax
	je	.L7
	jmp	.L4
.L6:
	cmpl	$50, %eax
	je	.L8
	cmpl	$51, %eax
	je	.L9
	jmp	.L4
.L7:
	movl	$0, %edi
	call	exit@PLT
.L5:
	movq	-168(%rbp), %rdx
	leaq	-128(%rbp), %rax
	movq	%rdx, %rcx
	leaq	.LC3(%rip), %rdx
	movl	$100, %esi
	movq	%rax, %rdi
	call	strftime@PLT
	jmp	.L10
.L8:
	call	getpid@PLT
	movl	%eax, %edx
	leaq	-128(%rbp), %rax
	leaq	.LC4(%rip), %rsi
	movq	%rax, %rdi
	movl	$0, %eax
	call	sprintf@PLT
	jmp	.L10
.L9:
	call	rand@PLT
	movl	%eax, %ecx
	movl	$-2004318071, %edx
	movl	%ecx, %eax
	imull	%edx
	leal	(%rdx,%rcx), %eax
	sarl	$4, %eax
	movl	%eax, %edx
	movl	%ecx, %eax
	sarl	$31, %eax
	subl	%eax, %edx
	movl	%edx, %eax
	imull	$30, %eax, %eax
	subl	%eax, %ecx
	movl	%ecx, %eax
	leal	1(%rax), %edx
	leaq	-128(%rbp), %rax
	leaq	.LC4(%rip), %rsi
	movq	%rax, %rdi
	movl	$0, %eax
	call	sprintf@PLT
	jmp	.L10
.L4:
	leaq	-128(%rbp), %rax
	movabsq	$2334106421097295433, %rbx
	movq	%rbx, (%rax)
	movabsq	$753353917276972402, %rbx
	movq	%rbx, 8(%rax)
	movb	$0, 16(%rax)
	nop
.L10:
	movl	-184(%rbp), %eax
	movl	%eax, %ebx
	leaq	-128(%rbp), %rax
	movq	%rax, %rdi
	call	strlen@PLT
	leaq	1(%rax), %rdx
	leaq	-160(%rbp), %rcx
	leaq	-128(%rbp), %rsi
	movl	-180(%rbp), %eax
	movl	%ebx, %r9d
	movq	%rcx, %r8
	movl	$0, %ecx
	movl	%eax, %edi
	call	sendto@PLT
	jmp	.L3
	.cfi_endproc
.LFE2:
	.size	main, .-main
	.ident	"GCC: (Ubuntu 6.3.0-12ubuntu2) 6.3.0 20170406"
	.section	.note.GNU-stack,"",@progbits
