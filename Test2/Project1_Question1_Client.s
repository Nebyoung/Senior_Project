	.file	"Project1_Question1_Client.c"
	.comm	sockfd,4,4
	.comm	cli_addr,16,16
	.comm	serv_addr,16,16
	.comm	s,100,32
	.comm	response,4,4
	.comm	nread,4,4
	.comm	servlen,4,4
	.comm	request,1,1
	.section	.rodata
.LC0:
	.string	"127.0.0.1"
	.align 8
.LC1:
	.string	"client: can't open datagram socket"
	.align 8
.LC2:
	.string	"client: can't bind local address"
.LC3:
	.string	"%s \n"
.LC4:
	.string	"   %s\n"
.LC5:
	.string	"Nothing read. "
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
	subq	$16, %rsp
	movl	%edi, -4(%rbp)
	movq	%rsi, -16(%rbp)
	leaq	INThandler(%rip), %rsi
	movl	$2, %edi
	call	signal@PLT
	movl	$16, %edx
	movl	$0, %esi
	leaq	serv_addr(%rip), %rdi
	call	memset@PLT
	movw	$2, serv_addr(%rip)
	leaq	.LC0(%rip), %rdi
	call	inet_addr@PLT
	movl	%eax, 4+serv_addr(%rip)
	movl	$9999, %edi
	call	htons@PLT
	movw	%ax, 2+serv_addr(%rip)
	movl	$16, %edx
	movl	$0, %esi
	leaq	cli_addr(%rip), %rdi
	call	memset@PLT
	movw	$2, cli_addr(%rip)
	movl	$0, %edi
	call	htonl@PLT
	movl	%eax, 4+cli_addr(%rip)
	movl	$0, %edi
	call	htons@PLT
	movw	%ax, 2+cli_addr(%rip)
	movl	$0, %edx
	movl	$2, %esi
	movl	$2, %edi
	call	socket@PLT
	movl	%eax, sockfd(%rip)
	movl	sockfd(%rip), %eax
	testl	%eax, %eax
	jns	.L2
	leaq	.LC1(%rip), %rdi
	call	perror@PLT
	movl	$1, %edi
	call	exit@PLT
.L2:
	movl	sockfd(%rip), %eax
	movl	$16, %edx
	leaq	cli_addr(%rip), %rsi
	movl	%eax, %edi
	call	bind@PLT
	testl	%eax, %eax
	jns	.L3
	leaq	.LC2(%rip), %rdi
	call	perror@PLT
	movl	$1, %edi
	call	exit@PLT
.L3:
	movl	4+cli_addr(%rip), %eax
	movl	%eax, %edi
	call	inet_ntoa@PLT
	movq	%rax, %rsi
	leaq	.LC3(%rip), %rdi
	movl	$0, %eax
	call	printf@PLT
.L6:
	call	menu
	movl	%eax, response(%rip)
	movl	$16, servlen(%rip)
	movl	response(%rip), %eax
	addl	$48, %eax
	movb	%al, request(%rip)
	movl	servlen(%rip), %eax
	movl	%eax, %edx
	movl	sockfd(%rip), %eax
	movl	%edx, %r9d
	leaq	serv_addr(%rip), %r8
	movl	$0, %ecx
	movl	$1, %edx
	leaq	request(%rip), %rsi
	movl	%eax, %edi
	call	sendto@PLT
	movl	sockfd(%rip), %eax
	leaq	servlen(%rip), %r9
	leaq	serv_addr(%rip), %r8
	movl	$0, %ecx
	movl	$100, %edx
	leaq	s(%rip), %rsi
	movl	%eax, %edi
	call	recvfrom@PLT
	movl	%eax, nread(%rip)
	movl	nread(%rip), %eax
	testl	%eax, %eax
	jle	.L4
	leaq	s(%rip), %rsi
	leaq	.LC4(%rip), %rdi
	movl	$0, %eax
	call	printf@PLT
	jmp	.L6
.L4:
	leaq	.LC5(%rip), %rdi
	call	puts@PLT
	jmp	.L6
	.cfi_endproc
.LFE2:
	.size	main, .-main
	.section	.rodata
.LC6:
	.string	"\n\nGoodbye!\n"
	.text
	.globl	INThandler
	.type	INThandler, @function
INThandler:
.LFB3:
	.cfi_startproc
	pushq	%rbp
	.cfi_def_cfa_offset 16
	.cfi_offset 6, -16
	movq	%rsp, %rbp
	.cfi_def_cfa_register 6
	subq	$16, %rsp
	movl	%edi, -4(%rbp)
	movl	-4(%rbp), %eax
	movl	$1, %esi
	movl	%eax, %edi
	call	signal@PLT
	movl	$0, response(%rip)
	movl	$16, servlen(%rip)
	movl	response(%rip), %eax
	addl	$48, %eax
	movb	%al, request(%rip)
	movl	servlen(%rip), %eax
	movl	%eax, %edx
	movl	sockfd(%rip), %eax
	movl	%edx, %r9d
	leaq	serv_addr(%rip), %r8
	movl	$0, %ecx
	movl	$1, %edx
	leaq	request(%rip), %rsi
	movl	%eax, %edi
	call	sendto@PLT
	leaq	.LC6(%rip), %rdi
	call	puts@PLT
	movl	$0, %edi
	call	exit@PLT
	.cfi_endproc
.LFE3:
	.size	INThandler, .-INThandler
	.section	.rodata
.LC7:
	.string	"\n\nWhat would you like to do?\n"
	.align 8
.LC8:
	.string	"1. Current time\n2. PID (process ID) of the server\n3. Random number between 1 and 30, inclusive\n"
.LC9:
	.string	"%d"
.LC10:
	.string	"Invalid option, try again."
	.text
	.globl	menu
	.type	menu, @function
menu:
.LFB4:
	.cfi_startproc
	pushq	%rbp
	.cfi_def_cfa_offset 16
	.cfi_offset 6, -16
	movq	%rsp, %rbp
	.cfi_def_cfa_register 6
	subq	$16, %rsp
	movq	%fs:40, %rax
	movq	%rax, -8(%rbp)
	xorl	%eax, %eax
	movl	$0, -12(%rbp)
.L12:
	leaq	.LC7(%rip), %rdi
	call	puts@PLT
	leaq	.LC8(%rip), %rdi
	call	puts@PLT
	leaq	-12(%rbp), %rax
	movq	%rax, %rsi
	leaq	.LC9(%rip), %rdi
	movl	$0, %eax
	call	__isoc99_scanf@PLT
	movl	-12(%rbp), %eax
	subl	$1, %eax
	cmpl	$2, %eax
	ja	.L9
	movl	-12(%rbp), %eax
	movq	-8(%rbp), %rdx
	xorq	%fs:40, %rdx
	je	.L13
	jmp	.L14
.L9:
	leaq	.LC10(%rip), %rdi
	movl	$0, %eax
	call	printf@PLT
	jmp	.L12
.L14:
	call	__stack_chk_fail@PLT
.L13:
	leave
	.cfi_def_cfa 7, 8
	ret
	.cfi_endproc
.LFE4:
	.size	menu, .-menu
	.ident	"GCC: (Ubuntu 6.3.0-12ubuntu2) 6.3.0 20170406"
	.section	.note.GNU-stack,"",@progbits
