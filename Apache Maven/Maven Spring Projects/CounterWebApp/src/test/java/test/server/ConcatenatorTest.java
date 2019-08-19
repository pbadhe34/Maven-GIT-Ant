package test.server;

import org.junit.Test;

import com.server.Concatenator;

import static junit.framework.Assert.*;

public class ConcatenatorTest {

    @Test
    public void testConcatenate(){
        String concatenated =
                Concatenator.concatenate(
                        "one", "two", "three", "four");

        assertEquals("one,two,three,four", concatenated);
    }
}