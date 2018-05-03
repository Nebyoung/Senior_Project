#include <stdlib.h>
#include <string.h>
#include <stdio.h>
#include <sys/types.h>
#include <errno.h>
#include <fcntl.h>
#include <sys/ipc.h>
#include <sys/ioctl.h>
#include <sys/socket.h>
#include <netinet/in.h>
#include <arpa/inet.h>
#include <signal.h>
#include "UDPinet.h"

#define MAX 100


int menu(void);
void  INThandler(int sig);

  int                 sockfd;
    struct sockaddr_in  cli_addr, serv_addr;
    char                s[MAX];      /* array to hold output */
    int                 response;    /* user response        */
    int                 nread;       /* number of characters */
    int					servlen;     /* length of server addr*/
    char				request;
	

int main(int argc, char **argv)
{

	
	signal(SIGINT, INThandler);
	
    /* Set up the address of the server to be contacted. */
    memset((char *) &serv_addr, 0, sizeof(serv_addr));
    serv_addr.sin_family      = AF_INET;
    serv_addr.sin_addr.s_addr = inet_addr(SERV_HOST_ADDR);
    serv_addr.sin_port        = htons(SERV_UDP_PORT);
	
	

    /* Set up the address of the client. */
    memset((char *) &cli_addr, 0, sizeof(cli_addr));
    cli_addr.sin_family      = AF_INET;
    cli_addr.sin_addr.s_addr = htonl(0);
    cli_addr.sin_port        = htons(0);
	
	

    /* Create a socket (an endpoint for communication). */
    if ( (sockfd = socket(AF_INET, SOCK_DGRAM, 0)) < 0) {
        perror("client: can't open datagram socket");
        exit(1);
    }

    /* Bind the client's socket to the client's address */
    if (bind(sockfd, (struct sockaddr *) &cli_addr, sizeof(cli_addr)) < 0) {
        perror("client: can't bind local address");
        exit(1);
    }

    printf("%s \n",inet_ntoa(cli_addr.sin_addr));

    /* Display the menu, read user's response, and send it to the server. */
    while(1) {
	response = menu();
        /* Send the user's response to the server. */
	servlen = sizeof(serv_addr);
	request = (char)('0' + response);
        sendto (sockfd, (char *) &request, sizeof(request), 0,
                 (struct sockaddr *) &serv_addr, servlen);

        /* Read the server's response. */
        nread = recvfrom(sockfd, s, MAX, 0,
                 (struct sockaddr *) &serv_addr, &servlen);
        if (nread > 0) {
			printf("   %s\n", s);
	} else {
		printf("Nothing read. \n");
	}
    }
    exit(0);  /* Exit if response is 4  */
	return 1;
}


void  INThandler(int sig)
{
	
     signal(sig, SIG_IGN);
	 response = 0;
	 servlen = sizeof(serv_addr);
	request = (char)('0' + response);
     sendto (sockfd, (char *) &request, sizeof(request), 0, (struct sockaddr *) &serv_addr, servlen);
	printf("\n\nGoodbye!\n\n");
	exit(0);
     
} //code found from http://www.csl.mtu.edu/cs4411.ck/www/NOTES/signal/install.html

int menu()
{
	int choice = 0;
	while (1)
	{
		printf("\n\nWhat would you like to do?\n\n");
		printf("1. Current time\n2. PID (process ID) of the server\n3. Random number between 1 and 30, inclusive\n\n");
		scanf("%d", &choice);
		switch (choice)
		{
			case 1:
			case 2:
			case 3:
				return choice;
			default:
				printf("Invalid option, try again.");
		}
	}
}

