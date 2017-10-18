#!/bin/bash
# Variables
START=1
DIRECTORIES_NUMBER=2
SUBDIRECTORIES_NUMBER=3
directories_maker()
{
  mkdir father
  cd ./father

  for (( c=$START; c<=$1; c++ )) do
    mkdir directory$c
    for (( d=$START; d<=$2; d++ )) do
      mkdir directory$c/directory$d
    done
  done
}
directories_maker DIRECTORIES_NUMBER SUBDIRECTORIES_NUMBER
