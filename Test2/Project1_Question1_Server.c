/*-------------------------------------------------------------*/
/* server.c - sample time/date server.                         */
/*-------------------------------------------------------------*/
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <time.h>
#include <sys/types.h>
#include <errno.h>
#include <fcntl.h>
#include <sys/ipc.h>
#include <sys/ioctl.h>
#include <sys/socket.h>
#include <netinet/in.h>
#include <arpa/inet.h>
#include <unistd.h>
#include "UDPinet.h"

#define MAX 100

int main(int argc, char **argv)
{
    int                 sockfd, newsockfd, clilen, childpid;
    struct sockaddr_in  cli_addr, serv_addr;
    struct tm           *timeptr;  /* pointer to time structure */
    time_t              clock;     /* clock value (in secs)     */
    char                s[MAX];
    char                request;

    /* Create communication endpoint */
    if ( (sockfd = socket(AF_INET, SOCK_DGRAM, 0)) < 0) {
        perror("server: can't open datagram socket");
        exit(1);
    }

    /* Bind socket to local address */
    memset((char *) &serv_addr, 0, sizeof(serv_addr));
    serv_addr.sin_family      = AF_INET;
    serv_addr.sin_addr.s_addr = htonl(INADDR_ANY);
    serv_addr.sin_port        = htons(SERV_UDP_PORT);

    if (bind(sockfd, (struct sockaddr *) &serv_addr, sizeof(serv_addr)) < 0) {
        perror("server: can't bind local address");
        exit(1);
    }

    for ( ; ; ) {

        /* Read the request from the client. */
	clilen = sizeof(cli_addr);
        recvfrom(sockfd, (char *) &request, sizeof(request), 0,
                  (struct sockaddr *)&cli_addr, &clilen);
printf("Received: %c \n", request);

        /* Generate an appropriate reply. */
        clock = time(0);
        timeptr = localtime(&clock);

        switch(request) {
		case '0':
				exit(0);
				break;
        case '1': strftime(s,MAX,"%T",timeptr);
	            break;

	    case '2': sprintf(s, "%d", (int)getpid());
	            break;

	    case '3': sprintf(s, "%d", rand() %30 + 1);
                    break;

		default: strcpy(s,"Invalid request\n");
				 break;
        }

        /* Send the reply to the client. */
        sendto(sockfd, s, strlen(s)+1, 0,
                (struct sockaddr *) &cli_addr, clilen);
    }
	return 1;
}
